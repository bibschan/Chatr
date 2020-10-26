import UserChoicesService from "../services/UserChoicesService.js";
import Util from "../utils/Utils";

const util = new Util();

class UserChoicesController {
    static async getAllUserChoices(req,res) {
        try {
            const allChoices = await UserChoicesService.getAllUserChoices();
            if(allChoices.length > 0) {
                util.setSuccess(200, "User choices Retrieved!", allChoices);
            } else {
                util.setSuccess(200, "No choices found");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async getUserChoices(req,res) {
        const id = req.params.id;
        try {
            const userChoices = await UserChoicesService.getUserChoices(id);
            if(group) {
                util.setSuccess(200, `Choices for user ${id} retrieved!`, userChoices);
            } else {
                util.setSuccess(200, "No group found");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async createUserChoice(req,res) {
        // I didn't make groupId a requirement cause a user might not have a group
        if (!req.body.movieId || !req.body.userIdFK) {
            util.setError(400, "Please provide a userId and movieId details");
            return util.send(res);
          }
        console.log(req);
        const userChoice = req.body;
        
        try {
            // there's something wrong with the ID increment???
            const user = await UserChoicesService.createUserChoice(userChoice);
            if(user) {
                util.setSuccess(200, "User Choice Created!", user);
            } else {
                util.setSuccess(200, "Couldn't create user choice");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async deleteChoice(req,res) {
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, "Please provide a numeric id value");
            return util.send(res);
          }

        try {
            const userChoice = await UserChoicesService.deleteChoice(id);
            if(userChoice) {
                util.setSuccess(200, "User Choice Deleted!", userChoice);
            } else {
                util.setSuccess(200, `Couldn't delete User Choice with id ${id}`);
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
}
export default UserChoicesController;