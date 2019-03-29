module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    }
  });
  return user;
};
