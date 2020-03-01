require("dotenv").config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require("./../config/mongo");
const sportModel = require("./../models/Sport");


const sportdata = [
{
    name: "Tabletennis",
    image: "./../images/Tabletennis.jpg"
},
{
    name : "Football",
    image: "./../images/Football.jpg"
},
{
    name: "Tennis",
    image: "./../images/Tennis.jpg"
},
{
    name : "Basketball",
    image: "./../images/Basketball.jpg"
},
{
    name: "Handball",
    image: "./../images/Handball.jpg"
},
{
    name: "Badminton",
    image: "./../images/Badminton.jpg"
},
{
    name: "Petanque",
    image: "./../images/Petanque.jpeg"
},
{
    name: "Volleyball",
    image: "./../images/Volleyball.jpg"
},
{
    name: "Judo",
    image: "./../images/Judo2.png"
},
{
    name: "Golf",
    image: "./../images/Golf.jpg"
},
{
    name: "Boxing",
    image: "./../images/Boxing3.png"
},
{
    name: "Skateboard",
    image: "./../images/Skateboard.jpg"
},
{
    name: "Biking",
    image: "./../images/Biking2.png"
},
{
    name: "Surfing",
    image: "./../images/Surf.jpg"
},
{
    name: "Sailing",
    image: "./../images/Sailing.jpg"
},
{
    name: "Karate",
    image: "./../images/Karate.jpg"
},
{
    name: "Rugby",
    image: "./../images/Rugby.jpg"
},
{
    name: "Yoga",
    image: "./../images/Yoga.jpg"
},
];

const seeds = sportdata;

sportModel.insertMany(seeds)
.then(dbRes => console.log(dbRes))
.catch(dbErr => console.log(dbErr))
