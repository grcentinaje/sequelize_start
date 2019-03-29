module.exports = function (sequelize, DataTypes) {

    var food = sequelize.define("food", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
        },

        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: false
        },
    });
    return food;
};


