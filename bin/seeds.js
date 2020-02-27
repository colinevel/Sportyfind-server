require("dotenv").config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require("./../config/mongo");

const eventModel = require("./../models/Event");
const sportModel = require("./../models/Sport");
const userModel = require("./../models/User");


async function seedIt() {

  try {

    const event = {
      name: "Sunday Football",
      date: "2020-01-13T00:00:00.000+00:00",
      localisation: "5 rue d'Odessa",
      participants: [],
      maxParticipants: 10,
      description: "great event",
      occurence: "one shot",
      ratings: []
    };

    const eventSeed = await eventModel.create(event);

    const user =
    {
      username: "raoul99",
      firstName: "Raoul",
      lastName: "Santoro",
      email: "raoul@gmail.com",
      password: "raoul",
      city: "Paris",
      contacts: [],
      favorites: [],
      avatar: ""
    };


    const userSeed = await userModel.create(user);

    const sport =
    {
      name: "Football",
      image: ""
    };
    

    const sportSeed = await sportModel.create(sport);


    console.log("All good");
    console.log(eventSeed, userSeed, sportSeed);

  }
  catch (err) {
    console.error(err)
  }
}

seedIt()