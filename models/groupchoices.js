'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupChoices = sequelize.define('GroupChoices', {
    groupId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  GroupChoices.associate = function(models) {
    // associations can be defined here
  };
  return GroupChoices;
};