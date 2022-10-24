// const data = require('../../NewYorkResults.json');

// const events = [];
// data.forEach(ele => {
  
  // const id = ele.id;
  // const name = ele.name;
  // const start_date = ele.start_date;
  // const primary_venue_id = ele.primary_venue_id;
  // const summary = ele.summary;
  // const image = ele['image.url'];
  // const value = ele['ticket_availability.maximum_ticket_price.major_value'];
  // const primary_venue = ele['primary_venue.name'];
  // const address = ele['primary_venue.address.localized_address_display'];
  // const city = ele['primary_venue.address.city'];
  // const ticket_availabile = ele['ticket_availability.has_available_tickets'];

//   console.log(
//     `INSERT INTO simple_events VALUES('${id}', '${name}', ${start_date}, '${primary_venue_id}', '${summary}', '${image}', ${value}, '${primary_venue}', '${address}', '${city}', ${ticket_availabile});`
//   )
// })

const db = require('../models/eventModel');
const data = require('../../NewYorkResults.json');


eventController = {};

eventController.insertData = async () => {
  try {
    const events = [];
    await data.forEach(ele => {
        events.push({
          id: ele.id,
          name: ele.name,
          start_date: ele.start_date,
          primary_venue_id: ele.primary_venue_id,
          summary: ele.summary,
          image: ele['image.url'],
          value: ele['ticket_availability.maximum_ticket_price.value'],
          primary_venue: ele['primary_venue.name'],
          address: ele['primary_venue.address.localized_address_display'],
          city: ele['primary_venue.address.city'],
          ticket_availabile: ele['ticket_availability.has_available_tickets'],
        })
      })
    //   console.log(events);
    for (let i = 0; i < events.length; i++) {
        const values = [];
        await values.push(...Object.values(events[i]));
        const insertQuery = `INSERT INTO test1 VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;`;

        db.query(insertQuery, values, (err, res) => {
            if (err) console.log('err: ', err);
            console.log(i, ': ', res);
          })
      }
    
      
  } catch (err) {
    console.log(err);
  }
};

eventController.insertData();