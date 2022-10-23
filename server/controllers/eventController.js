const fs = require ('fs/promises');
const path = require('path');
// const db = fs.readFile(path.resolve(__dirname, './dataBase.json'))

//connection to SQL db will go here

const eventController = {

  getEvents: async(req, res, next) => {
    const { eventName } = req.body;
    try {
      let events = await fs.readFile(path.resolve(__dirname, './dataBase.json'))
      const parsedData = JSON.parse(events)
      res.locals.eventList = parsedData.results.filter(el => el.eventName = eventName);
      console.log('eventList', res.locals.eventList)
      return next();
    }
    catch(err) {
      return next({
        log: 'error in eventController.getEvents',
        status: 204,
        message: { err: 'EventList not available' },
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