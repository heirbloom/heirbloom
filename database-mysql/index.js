const Sequelize = require('sequelize');

// set up the database connection

const {
  DATABASE, USER_NAME, USER_PASSWORD, HOST, DB_PORT,
} = process.env;
const sequelize = new Sequelize(DATABASE, USER_NAME, USER_PASSWORD, {
  host: HOST,
  port: DB_PORT,
  dialect: 'mysql',
});

// test the db connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


// make a Users table
const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipcode: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// make a recipes table
const favRecipes = sequelize.define('fav_recipes', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  recipe_name: {
    type: Sequelize.STRING,
  },
  recipe_url: {
    type: Sequelize.STRING,
  },
  recipe_image: {
    type: Sequelize.STRING,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// make a joint users/recipes table
const UsersRecipes = sequelize.define('users_recipes', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Users,
      key: 'id',
    },
  },
  recipeId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: favRecipes,
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

favRecipes.belongsToMany(Users, {
  through: 'users_recipes',
  foreignKey: 'recipeId',
});

Users.belongsToMany(favRecipes, {
  through: 'users_recipes',
  foreignKey: 'userId',
});


const States = sequelize.define('states', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  abbreviation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  region: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});


const Regions = sequelize.define('regions', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  region: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  regionid: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});


// make an Ingredients table
const Ingredients = sequelize.define('ingredients', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  NameRegion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  SearchTerm: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Region: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  URL: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Jan: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Feb: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Mar: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Apr: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  May: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Jun: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Jul: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Aug: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Sep: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Oct: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Nov: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Dec: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});


// sync all of the models
Users.sync();
favRecipes.sync();
UsersRecipes.sync();
Regions.sync();
States.sync();
Ingredients.sync();


// export all of the models
module.exports.Users = Users;
module.exports.favRecipes = favRecipes;
module.exports.UsersRecipes = UsersRecipes;
module.exports.Regions = Regions;
module.exports.States = States;
module.exports.Ingredients = Ingredients;
