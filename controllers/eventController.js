const fs = require ('fs');
const path = require('path');
// const db = fs.readFile(path.resolve(__dirname, './dataBase.json'))

//connection to SQL db will go here

const eventController = {

  getEvents: async(req, res, next) => {
    try {
      let events = await fs.readFile(path.resolve(__dirname, './dataBase.json'))
      const parsedData = JSON.parse(events);
      res.locals.eventList = parsedData.results;
      return next();
    }catch(err) {
      return next({
        log: 'error in wineController.getWine',
        status: 204,
        message: { err: 'WineList not available' },
      });
     };
    }
  };

  //   deleteEvent: async(req, res, next) => {
  //     try{
  //       const { eventName } = req.body;

  //     }
  //   }
  // };

  module.exports = eventController;