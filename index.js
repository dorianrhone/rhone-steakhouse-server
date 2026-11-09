const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
},
  filename: function (req, file, cb) {
    cb(null, file.originalname);
}
});

const upload = multer({ storage: storage });

let menuItems = [
    {
        "_id": 1,
        "name": "CHARLESTON OYSTERS",
        "category": "APPETIZERS",
        "description": "Fresh Charleston oysters served with lemon and cocktail sauce.",
        "price": 18,
        "img_name": "oysters.jpg"
    },
    {
        "_id": 2,
        "name": "CRAB CAKES",
        "category": "APPETIZERS",
        "description": "Lump crab cakes served with remoulade sauce.",
        "price": 22,
        "img_name": "crabcakes.jpg"
    },
    {
        "_id": 3,
        "name": "FRIED CALAMARI",
        "category": "APPETIZERS",
        "description": "Crispy fried calamari served with marinara sauce.",
        "price": 16,
        "img_name": "calamari.jpg"
    },
    {
        "_id": 4,
        "name": "SEARED SCALLOPS",
        "category": "APPETIZERS",
        "description": "Pan-seared scallops served with a lemon butter sauce.",
        "price": 24,
        "img_name": "scallops.jpg"
    },
    {
        "_id": 5,
        "name": "RIB-EYE STEAK",
        "category": "STEAK & CHOPS",
        "description": "Grilled rib-eye steak with garlic butter.",
        "price": 48,
        "img_name": "ribeye.jpg"
    },
    {
        "_id": 6,
        "name": "FILET MIGNON",
        "category": "STEAK & CHOPS",
        "description": "Grilled filet mignon with a red wine reduction.",
        "price": 54,
        "img_name": "filet.jpg"
    },
    {
        "_id": 7,
        "name": "NEW YORK STRIP",
        "category": "STEAK & CHOPS",
        "description": "Grilled New York strip steak with a peppercorn sauce.",
        "price": 50,
        "img_name": "strip.jpg"
    },
    {
        "_id": 8,
        "name": "SALMON FILLET",
        "category": "SEAFOOD",
        "description": "Pan-seared salmon fillet with a dill cream sauce.",
        "price": 26,
        "img_name": "salmon.jpg"
    },
    {
        "_id": 9,
        "name": "LOBSTER TAIL",
        "category": "SEAFOOD",
        "description": "Grilled lobster tail served with drawn butter.",
        "price": 34,
        "img_name": "lobster.jpg"
    },
    {
        "_id": 10,
        "name": "KING CRAB LEGS",
        "category": "SEAFOOD",
        "description": "Steamed king crab legs served with drawn butter.",
        "price": 36,
        "img_name": "kingcrab.jpg"
    },
    {
        "_id": 11,
        "name": "CHOCOLATE LAVA CAKE",
        "category": "DESSERT",
        "description": "Warm chocolate cake with a molten center.",
        "price": 12,
        "img_name": "lavacake.jpg"
    },
    {
        "_id": 12,
        "name": "CHEESECAKE",
        "category": "DESSERT",
        "description": "Classic New York-style cheesecake.",
        "price": 10,
        "img_name": "cheesecake.jpg"
    },
    {
        "_id": 13,
        "name": "ICE CREAM SUNDAE",
        "category": "DESSERT",
        "description": "Vanilla ice cream with chocolate sauce and whipped cream.",
        "price": 8,
        "img_name": "sundae.jpg"
    },
    {
        "_id": 14,
        "name": "CHARDONNAY",
        "category": "WINES",
        "description": "Elegant and crisp white wine with notes of citrus and oak.",
        "price": 14,
        "img_name": "chardonnay.jpg"
    },
    {
        "_id": 15,
        "name": "MERLOT",
        "category": "WINES",
        "description": "Smooth red wine with flavors of plum and chocolate.",
        "price": 16,
        "img_name": "merlot.jpg"
    },
    {
        "_id": 16,
        "name": "PINOT NOIR",
        "category": "WINES",
        "description": "Light-bodied red wine with hints of cherry and raspberry.",
        "price": 18,
        "img_name": "pinotnoir.jpg"
    }
];

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.listen(3001, () => {
  console.log('Server is up and running');
});