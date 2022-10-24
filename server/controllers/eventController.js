// const fs = require ('fs/promises');
// const path = require('path');
// const db = fs.readFile(path.resolve(__dirname, './dataBase.json'))

const { resolvePath } = require('react-router-dom');
const db = require('../models/eventModel');

const eventController = {
  getEvents: async(req, res, next) => {
    console.log('this is eventController')
    try{
      const queryEvents = 'SELECT * FROM simple_events LIMIT 10;';
      let queryResults = await db.query(queryEvents);
      console.log('this is queryResults' + JSON.stringify(queryResults.rows));
      res.locals.eventList = queryResults.rows;
      return next();
    }catch(error)  {
      next({
        log: 'Error caught in eventController.getEvents',
        status: 400,
        message: { err: `ERROR STATUS: ${error}` }
      });
      }
    },

  getCityEvents: async(req, res, next) => {
    console.log('this is cityController')
    const {city} = req.body;
    try{
      const queryCity = `SELECT * FROM simple_events WHERE city=${city};`;
      let queryCityResults = await db.query(queryCity);
      console.log('this is queryCityResults' + JSON.stringify(queryCityResults.rows));
      res.locals.eventList = queryCityResults.rows;
    }catch(error)  {
      next({
        log: 'Error caught in eventController.getCityEvents',
        status: 400,
        message: { err: `ERROR STATUS: ${error}` }
      });
      }
     }, 

  getOutdoorEvents: async(req, res, next) => {
    console.log('this is outdoorController')
    const {options, city} = req.body;
    try{
      const queryOutdoors = `SELECT * FROM simple_events WHERE city=${city}`
      let queryOutdoorsResults = await db.query(queryOutdoors);
      let filtered = queryOutdoorsResults.rows.filter(el => el.summary.includes('park'));
      res.locals.eventList = filtered;
    }catch(error)  {
      next({
        log: 'Error caught in eventController.getOutdoorEvents',
        status: 400,
        message: { err: `ERROR STATUS: ${error}` }
      });
      }
  },


  deleteEvent: async(req, res, next) => {
    const {id} = req.body
      try{
        const deleteRow = `DELETE FROM simple_events WHERE id=${id};`;
        let deleteResults = await db.query(deleteRow);
        console.log('this is delete results' + JSON.stringify(deleteResults));
        return next();
      }catch(error) {
        next({
          log: 'Error caught in eventController.deleteEvent',
          status: 400,
          message: { err: `ERROR STATUS: ${error}`}
        });
      } 
  }
   
};





  module.exports = eventController;