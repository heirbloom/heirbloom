# Heirbloom

HeirBloom celebrates the blossoming Locavore/Slow Food movements by highlighting fresh, local ingredients, with a focus on their preparation, as well as their availability through local independent farmers markets. Hopefully our app can be utilized to provide value to both users who prioritize cooking with fresh, sustainably sourced ingredients, as well as the farmers who grow such organic bounties.

http://www.heirbloom.fun/

<img align="left" title="See what local produce is in-season, find nearby farmer markets and discover recipes using those ingredients." src="https://rkportfolio-stuff.s3.amazonaws.com/Heirbloom/heirbloom+available+produce.JPG" height="250" width="400"><img align="justify" title="Edit your location to see what produce is available anywhere in the US." src="https://rkportfolio-stuff.s3.amazonaws.com/Heirbloom/Heirbloom+profile+page.JPG" height="250" width="400">

## Getting Started
These instructions will allow you to get a copy of this project running on your local machine.

### Prerequisites
Before starting, ensure you have met the following requirements:

You have installed the latest version of npm and node. If not, follow the instructions from this link:
`https://www.npmjs.com/get-npm`.

You have installed MySQL on your local machine. If not, follow the steps found here: `https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04`.

Fork this repository and clone it to your local machine.

You'll find four folders in this repository:
+ database-mysql -> contains the database connection object as well as Sequelize models to generate the required MySQL tables
+ middleware -> contains an authentication middleware function to authenticate/create new users and keep them authorized while logged in
+ react-client -> client-side repo (contains it's own package.json)
+ server -> server-side repo

Note: There are two package-json files. You must run `npm install` from the root directory as well as the react-client directory.

Cd into react-client and run `npm start` to start the client.

## Development server
In order to start the server, you will need to be shelled into MySQL and have a .env file with appropriate variables:

+ DATABASE = 'heirbloom'
+ USER_NAME = whatever username you use to access MySQL
+ USER_PASSWORD = whatever passport you use to access MySQL
+ HOST = 'localhost'
+ DB_PORT = 3306
+ FOOD2FORKEY= API key you recieve from FOOD2FORKEY to get recipes using local produce.

Run `npm start` to start the dev server. Navigate to `http://localhost:3000/` to see the application running on your local machine.

The database will need some data populated into it upon starting the server. This can be found in the `seeder.js` file. Run `node seeder.js` to populate the database with said data and then re-start the server.

## Build

Run `build:client-prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Reactstrap](https://reactstrap.github.io/) - Front end design
* [Node.js](https://nodejs.org/en/docs/) - Server-side runtime environment
* [Express](https://expressjs.com/en/api.html) - Server-side framework 
* [MySQL w/Sequelize](https://www.mysql.com/) - RDBMS; Sequelize used as an ORM in conjuctino with MySQL
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Authentication using JWT and bcrypt.js


## Authors
* Product Owner: Sam De La Fuente
* Scrum Master: Geoffrey Ian Ward
* Development Team Members: Daniel Murphy, Raphael Khan


## Acknowledgments

* The friendly staff at Operation Spark
