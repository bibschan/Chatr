import db from "../models/index.js";

//a service helps you interface with your model (database)
class UserCategoriesService {
  static async getAllUserCategories() {
    try {
      console.log(db.User_categories);
      return await db.User_categories.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUserCategory(newUserCategory) {
    try {
      return await db.User_categories.create(newUserCategory);
    } catch (error) {
      throw error;
    }
  }

  static async updateUserCategory(id, updateUserCategory) {
    try {
      const UserCategoryToUpdate = await db.User_categories.findOne({
        where: { id: Number(id) },
      });

      if (UserCategoryToUpdate) {
        await db.User_categories.update(updateUserCategory, {
          where: { id: Number(id) },
        });

        return updateUserCategory;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUserCategory(id) {
    try {
      const theUserCategory = await db.User_categories.findOne({
        where: { id: Number(id) },
      });

      return theUserCategory;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUserCategory(id) {
    try {
      const userCategoryToDelete = await db.User_categories.findOne({
        where: { id: Number(id) },
      });

      if (userCategoryToDelete) {
        const deletedUserCategory = await db.User_categories.destroy({
          where: { id: Number(id) },
        });
        return deletedUserCategory;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getChannels(id) {
    try {
      const channels = await db.User_categories.findOne({
        where: { userId: Number(id) },
      });
      return channels;
    } catch (error) {
      throw error;
    }
  }
}

export default UserCategoriesService;
