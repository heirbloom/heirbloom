const Sequelize = require('sequelize');

// set up the database connection
const {
  dbName, dbUser, dbPass, dbHost, PORT
} = process.env;
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: PORT,
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
  zipcode: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  regionId: {
    type: Sequelize.STRING,
    allowNull: false,
  }
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
  ingredient_id: {
    type: Sequelize.INTEGER(11),
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

// UserRecipes' userId column references Users primary key
UsersRecipes.belongsTo(Users, {
  foreignKey: 'userId',
});

// UserRecipes' recipeId column references favRecipes primary key
UsersRecipes.belongsTo(favRecipes, {
  foreignKey: 'recipeId',
});
// make a Regions table
const Regions = sequelize.define('regions', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// make a Seasons table
const Seasons = sequelize.define('seasons', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// make a joint Regions/Seasons table
const RegionsSeasons = sequelize.define('reasons_seasons', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  regionId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Regions,
      key: 'id',
    },
  },
  seasonId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Seasons,
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// RegionsSeasons' regionId column references Regions primary key
RegionsSeasons.belongsTo(Regions, {
  foreignKey: 'regionId',
});

// RegionsSeasons' seasonId column references Seasons primary key
RegionsSeasons.belongsTo(Seasons, {
  foreignKey: 'seasonId',
});


// make an Ingredients table
const Ingredients = sequelize.define('ingredients', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// make a joint regions_seasons/ingredients table
const AvailableIngredients = sequelize.define('available_ingredients', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  regionSeasonId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: RegionsSeasons,
      key: 'id',
    },
  },
  ingredientId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Ingredients,
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// AvailableIngredients regionSeasonId column references the join table RegionsSeason's primary key
AvailableIngredients.belongsTo(RegionsSeasons, {
  foreignKey: 'regionSeasonId',
});

// AvailableIngredients seasonId column references Ingredients primary key
AvailableIngredients.belongsTo(Ingredients, {
  foreignKey: 'ingredientId',
});

// A recipe can have many users
favRecipes.hasMany(UsersRecipes);
// A user can have many recipes
Users.hasMany(UsersRecipes);
// A region can have many seasons
Regions.hasMany(RegionsSeasons);
// A season can have mnay regions
Seasons.hasMany(RegionsSeasons);
// An ingredient can be in many regions and be available during many seasons
Ingredients.hasMany(AvailableIngredients);
// A region during any season can have many available ingredients
RegionsSeasons.hasMany(AvailableIngredients);


// sync all of the models
Users.sync();
favRecipes.sync();
UsersRecipes.sync();
Regions.sync();
Seasons.sync();
RegionsSeasons.sync();
Ingredients.sync();
AvailableIngredients.sync();


// export all of the models
module.exports.Users = Users;
module.exports.favRecipes = favRecipes;
module.exports.UsersRecipes = UsersRecipes;
module.exports.Regions = Regions;
module.exports.Seasons = Seasons;
module.exports.RegionsSeasons = RegionsSeasons;
module.exports.Ingredients = Ingredients;
module.exports.AvailableIngredients = AvailableIngredients;