import db from "../models/index.js";

//a service helps you interface with your model (database)
class CategoriesService {
  static async getAllCategories() {
    try {
      console.log(db.Categories);
      return await db.Categories.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addCategory(newCategory) {
    try {
      return await db.newCategories.create(newCategory);
    } catch (error) {
      throw error;
    }
  }

  static async updateCategory(id, updateCategory) {
    try {
      const CategoryToUpdate = await db.Categories.findOne({
        where: { id: Number(id) },
      });

      if (CategoryToUpdate) {
        await db.Categories.update(updateCategory, {
          where: { id: Number(id) },
        });

        return updateCategory;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getACategory(id) {
    try {
      const theCategory = await db.Categories.findOne({
        where: { id: Number(id) },
      });

      return theCategory;
    } catch (error) {
      throw error;
    }
  }

  static async deleteCategory(id) {
    try {
      const CategoryToDelete = await db.Categories.findOne({
        where: { id: Number(id) },
      });

      if (CategoryToDelete) {
        const deletedCategory = await db.Categories.destroy({
          where: { id: Number(id) },
        });
        return deletedCategory;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default CategoriesService;
