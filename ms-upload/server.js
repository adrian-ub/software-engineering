// Require all packages installed
const express = require("express");
const multer = require("multer");
const fs = require("file-system");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const myurl = `mongodb://${process.env.DATABASE_HOST || "localhost"}:${
  process.env.DATABASE_PORT || "27017"
}`;

//CREATE EXPRESS APP
const app = express();
app.use(express.json());

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err);
  db = client.db("test");
  app.listen(3000, () => {
    console.log("Database connected successfully");
    console.log("Server started on port 3000");
  });
});
//ROUTES WILL GO HERE
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/uploadphoto", upload.single("myImage"), (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString("base64");
  // Define a JSONobject for the image attributes for saving to database

  var finalImg = {
    contentType: req.file.mimetype,
    image: Buffer.from(encode_image, "base64"),
  };
  db.collection("myCollection").insertOne(finalImg, (err, result) => {
    console.log(result);
    if (err) return console.log(err);
    res.end(result.insertedId.toString());
  });
});

app.get("/photos", (req, res) => {
  db.collection("myCollection")
    .find()
    .toArray((err, result) => {
      const imgArray = result.map((element) => element._id);
      console.log(imgArray);
      if (err) return console.log(err);
      res.send(imgArray);
    });
});

app.get("/photo/:id", (req, res) => {
  var filename = req.params.id;
  db.collection("myCollection").findOne(
    { _id: ObjectId(filename) },
    (err, result) => {
      if (err) return console.log(err);
      res.contentType("image/jpeg");
      res.send(result.image.buffer);
    }
  );
});
