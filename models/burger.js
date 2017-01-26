module.exports = function(sequelize, DataTypes){

	var burgers = sequelize.define("burgers", {
		burger_name: DataTypes.STRING,
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		date: DataTypes.TIME
	});
	return burgers;
};