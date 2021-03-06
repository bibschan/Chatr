import db from "../../../../models/index.js";

class UserChoicesService {
    static async getAllChoices() {
        try {
            console.log(db.UserChoices);
            return await db.UserChoices.findAll();
          } catch (error) {
            throw error;
          }
    }

    //this route is not working properly, says there's 
    //bad syntax in the request
    static async getUserChoices(userIdFK) {
        //gets all choices one specific user has made
        try {
            console.log(userIdFK);
            const userChoices = await db.UserChoices.findAll({
                where: {userIdFK: Number(userIdFK)}
              });
              console.log(userChoices);
              return userChoices;
          } catch (error) {
            throw error;
          }
    }
    // I don't think I'll need this in this Service
    // static async getGroupChoices(groupIdFK) {
    //     //gets all choices a group has made
    //     try {
    //         // console.log(id);
    //         const groupChoices = await db.UserChoices.findAll({
    //             where: { groupIdFK: Number(groupIdFK)},
    //           });
    //           return groupChoices;
    //       } catch (error) {
    //         throw error;
    //       }
    // }

    // should I call this function somewhere?
    static async triggerForMovieGroupMatch(groupIdFK, movieId) {
        try {
            // console.log(id);
            const match = await db.UserChoices.findAll({
                where: { 
                    groupIdFK: Number(groupIdFK),
                    movieId: Number(movieId)
                },
              });
              return match;
          } catch (error) {
            throw error;
          }
    }

    static async createUserChoice(userChoice) {
        try {
          // console.log("service: " + userChoice.movieId);
          // let createChoice = await db.UserChoices.create(userChoice);
          const createChoice = await db.UserChoices.create({
            movieId: userChoice.movieId,
            userIdFK: userChoice.userIdFK,
            groupIdFK: userChoice.groupIdFK
          });
        
          
          return createChoice;
          } catch (error) {
            throw error;
          }
    }
    static async deleteChoice(id) {
        try {
            const choiceToDelete = await db.UserChoices.findOne({
              where: { id: Number(id) },
            });
      
            if (choiceToDelete) {
            return await db.UserChoices.destroy({
                where: { id: Number(id) },
              });
            }
            return null;
          } catch (error) {
            throw error;
          }
    }
}
export default UserChoicesService;