const fs = require ('fs/promises');
const path = require('path');
// const db = fs.readFile(path.resolve(__dirname, './dataBase.json'))

//connection to SQL db will go here

const eventController = {

  getEvents: async(req, res, next) => {
    console.log('hello')
    try {
      let events = await fs.readFile(path.resolve(__dirname, './dataBase.json'))
      console.log('events', events)
      const parsedData = JSON.parse(events);
      res.locals.eventList = parsedData.results;
      console.log('eventList', res.locals.eventList)
      return next();
    }
    catch(err) {
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