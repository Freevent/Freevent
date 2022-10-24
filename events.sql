-- create table simple_events (
--   id text,
--   name text,
--   start_date text,
--   primary_venue_id text,
--   summary text,
--   image text,
--   value integer,
--   primary_venue text,
--   address text,
--   city text,
--   ticket_available boolean
-- );

-- INSERT INTO simple_events(id, name, start_date, primary_venue_id, summary, image, value, primary_venue, address, city, ticket_available) VALUES ('419856009627','The Library After Hours: Teen Takeover','2022-10-29','114563959','Take over the Library after hours for a night of dancing, games, movies, and more—just for teens!','https://www.eventbrite.com/e/the-library-after-hours-teen-takeover-tickets-419856009627', 0, 'The Library After Hours: Teen Takeover','455 5th Avenue, New York, NY 10016','New York',true)
-- RETURNING *;


-- INSERT INTO simple_events(id, name, start_date, primary_venue_id, summary, image, value, primary_venue, address, city, ticket_available) VALUES ('429804957197','Lux Saturdays #1 party at  CAVALI NYC','2022-10-22','117044669','LUX SATURDAY: COLUMBUS DAY WEEKEND AT CAVALI - NYC','https://www.eventbrite.com/e/lux-saturdays-1-party-at-cavali-nyc-tickets-429804957197', 0,'Lux Saturdays #1 party at  CAVALI NYC','36-21 Steinway Street, Queens, NY 11101','Queens',true)
-- RETURNING *;

-- INSERT INTO simple_events(id, name, start_date, primary_venue_id, summary, image, value, primary_venue, address, city, ticket_available) VALUES ('400530095297','F4P Halloween Extravaganza 2022','2022-10-29','109259249','The Friends of 4 Parks ANNUAL HALLOWEEN EXTRAVAGANZA is back, this year in beautiful and spooooooooky Franz Sigel Park. Tricks and Treats!!','https://www.eventbrite.com/e/f4p-halloween-extravaganza-2022-tickets-400530095297',0,'F4P Halloween Extravaganza 2022','East 158th Street, The Bronx, NY 10451','The Bronx',true)
-- RETURNING *;

-- INSERT INTO simple_events(id, name, start_date, primary_venue_id, summary, image, value, primary_venue, address, city, ticket_available) VALUES ('428775608387','Destination Brooklyn: UEFA Champions League Watch Party','2022-10-25','116714669','Come to \"Destination Brooklyn\" for multiple screens showing every match, an on-site CBS Sports studio show, food, giveaways, and more!','https://www.eventbrite.com/e/destination-brooklyn-uefa-champions-league-watch-party-tickets-428775608387',0,'Destination Brooklyn: UEFA Champions League Watch Party','155 Furman St, Brooklyn, NY 11201','Brooklyn',true)
-- RETURNING *;

INSERT INTO simple_events(id, name, start_date, primary_venue_id, summary, image, value, primary_venue, address, city, ticket_available) VALUES ('419775268127','Dirty Thursday: 90s Night','2022-11-03','114539769','House of Yes presents Dirty Thursday every Thursday!\nFree with RSVP | $10 Without RSVP','https://www.eventbrite.com/e/dirty-thursday-90s-night-tickets-419775268127',0,'Dirty Thursday: 90s Night','2 Wyckoff Avenue, Brooklyn, NY 11237','Brooklyn',true)
RETURNING *