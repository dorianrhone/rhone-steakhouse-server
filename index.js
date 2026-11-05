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
    id: 1,
    name: "Ribeye Steak",
    description: "A juicy ribeye steak cooked to perfection.",
    price: 25.99,
    image: "/images/ribeye.jpg"
  },
  {
    id: 2,
    name: "Filet Mignon",
    description: "Tender filet mignon with a rich sauce.",
    price: 29.99,
    image: "/images/filet_mignon.jpg"
  },
  {
    id: 3,
    name: "New York Strip",
    description: "Classic New York strip steak with a side of vegetables.",
    price: 27.99,
    image: "/images/new_york_strip.jpg"
  }
];

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.listen(3001, () => {
  console.log('Server is up and running');
});