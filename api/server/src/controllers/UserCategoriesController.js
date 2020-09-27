import UserCategoriesService from "../services/UserCategoriesService";
import Util from "../utils/Utils";

const util = new Util();

class UserCategoriesController {
  static async getAllUserCategories(req, res) {
    try {
      const allUserCategories = await UserCategoriesService.getAllUserCategories();
      if (allUserCategories.length > 0) {
        util.setSuccess(200, "UserCategories retrieved", allUserCategories);
      } else {
        util.setSuccess(200, "No UserCategories found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUserCategory(req, res) {
    if (!req.body.FKUser || !req.body.FKCategories) {
      util.setError(400, "Please provide the Foreign Key details");
      return util.send(res);
    }
    const newUserCategory = req.body;
    try {
      const createdUserCategory = await UserCategoriesService.addUserCategory(
        newUserCategory
      );
      util.setSuccess(201, "UserCategory Added!", createdUserCategory);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedUserCategory(req, res) {
    const alteredUserCategory = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateUserCategory = await UserCategoriesService.updateCategory(
        id,
        alteredUserCategory
      );
      if (!updateUserCategory) {
        util.setError(404, `Cannot find UserCategory with the id: ${id}`);
      } else {
        util.setSuccess(200, "Category updated", updateUserCategory);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUserCategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theUserCategory = await UserCategoriesService.getAUserCategory(id);

      if (!theUserCategory) {
        util.setError(404, `Cannot find Category with the id ${id}`);
      } else {
        util.setSuccess(200, "Found Category", theUserCategory);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteUserCategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric value");
      return util.send(res);
    }

    try {
      const UserCategoryToDelete = await UserCategoriesService.deleteUserCategory(
        id
      );

      if (UserCategoryToDelete) {
        util.setSuccess(200, "UserCategory deleted");
      } else {
        util.setError(404, `Category with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getChannels(req, res) {
    const { id } = req.params;
    try {
      const getChannels = await UserCategoriesService.getChannels(id);
      //console.log(getChannels);
      if (!getChannels) {
        util.setError(404, "Cannot find UserCategories");
      } else {
        util.setSuccess(200, "UserCategories found", getChannels);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
}

export default UserCategoriesController;
