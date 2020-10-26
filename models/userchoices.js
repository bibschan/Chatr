'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserChoices = sequelize.define('UserChoices', {
      movieId: DataTypes.INTEGER,
      userIdFK: DataTypes.INTEGER,
      groupIdFK: DataTypes.INTEGER
  }, {
    hooks: {
      // after each row is inserted, search all table for another groupId and movieId match
      // if the query returns a user, then select both users and movieId and insert into groupchoices
      afterCreate: (user, options) => {
        function findMatch() {
          UserChoices.findAll({
            where: {
              groupId: user.groupIdFK,
              movieId: user.movieId
            }
          })  
        } 
        //dunno about this logic LOL
        findMatch().then(() => {
          models.GroupChoices.insert()
        })       
      }
    }
  });
 

  //NEED TO WORK HERE ON MY HOOK TO UPDATE AFTER A NEW ROW 
  // IS ENTERED, IF GROUPID AND MOVIE ID MATCH, THEN ADD INTO
  // GROUPCHOICES

  UserChoices.associate = function(models) {
    // associations can be defined here
  };
  return UserChoices;
};