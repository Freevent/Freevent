const fs = require('fs');
const data = require('./NewYorkResults.json');
const dataArray = require('./simpleData.json');

function reduceArray(array) {
  const newDataArray = [];
  data.forEach(el => {
   newDataArray.push({id: el.id, name: el.name, start_date: el.start_date, primary_venue_id: el.primary_venue_id, summary: el.summary, image: el['url'], value: el['ticket_availability.maximum_ticket_price.value'], primary_venue: el['name'], address: el['primary_venue.address.localized_address_display'], city: el['primary_venue.address.city'], ticket_available: el['ticket_availability.is_free']});
  })
  const jsonData = JSON.stringify(newDataArray);
  return jsonData;
};
reduceArray(data);


function getEventIds(array) {
  const eventIdArray =[];
  dataArray.forEach(el => {
    eventIdArray.push(el.id)
  })
  return eventIdArray;
}; 

console.log(getEventIds(dataArray));



