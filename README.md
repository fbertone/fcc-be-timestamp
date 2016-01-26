# Free Code Camp Project - API Basejump: Timestamp microservice

## User stories:

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)

2. If it does, it returns both the Unix timestamp and the natural language form of that date.

3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example usage:
* http://localhost:5000/December%2015,%202015
* http://localhost:5000/1450137600

### Example output:
> { "unix": 1450137600, "natural": "December 15, 2015" }

## TODO
* Add tests
* Insert current hostname in links inside the info page
* Add live preview on [Heroku]

## Info
Timestamp Microservice API project for [Free Code Camp] Back End Certification.

###License
**MIT**

   [Free Code Camp]: <http://www.freecodecamp.com>
   [Heroku]: <https://www.heroku.com>
