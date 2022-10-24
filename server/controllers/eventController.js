// const fs = require ('fs/promises');
// const path = require('path');
// const db = fs.readFile(path.resolve(__dirname, './dataBase.json'))

const { resolvePath } = require('react-router-dom');
const db = require('../models/eventModel');

const eventController = {
  getEvents: async(req, res, next) => {
    console.log('this is eventController')
    try{
      const queryEvents = 'SELECT * FROM simple_events LIMIT 100;';
      let queryResults = await db.query(queryEvents);
      res.locals.eventList = queryResults.rows;
      return next();
    }catch(error)  {
      next({
        log: 'Error caught in eventController.getEvents',
        status: 400,
        message: { err: `ERROR STATUS: ${error}` }
      });
      }
    }
  };
   
  //   deleteEvent: async(req, res, next) => {
  //     try{
  //       const { eventName } = req.body;

  //     }
  //   }
  // };


 /**getEvents: async(req, res, next) => {
    const { requestName } = req.body;
    try {
      let events = await fs.readFile(path.resolve(__dirname, './dataBase.json'))
      const parsedData = JSON.parse(events)
      console.log(parsedData)
      res.locals.eventList = parsedData.results.filter(el => el.eventName === requestName);
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
  }; */ 


  module.exports = eventController;