import CategoriesService from "../services/CategoriesService";
import Util from "../utils/Utils";

const util = new Util();

class CategoriesController {
  static async getAllCategories(req, res) {
    try {
      const allCategories = await CategoriesService.getAllCategories();
      if (allCategories.length > 0) {
        util.setSuccess(200, "Categories retrieved", allCategories);
      } else {
        util.setSuccess(200, "No Categories found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addCategory(req, res) {
    if (!req.body.categoryName || !req.body.description) {
      util.setError(400, "Please provide complete details");
      return util.send(res);
    }
    const newCategory = req.body;
    try {
      const createdCategory = await CategoriesService.addCategory(newCategory);
      util.setSuccess(201, "Category Added!", createdCategory);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedCategory(req, res) {
    const alteredCategory = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateCategory = await CategoryService.updateCategory(
        id,
        alteredCategory
      );
      if (!updateCategory) {
        util.setError(404, `Cannot find Category with the id: ${id}`);
      } else {
        util.setSuccess(200, "Category updated", updateCategory);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getACategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theCategory = await CategoriesService.getACategory(id);

      if (!theCategory) {
        util.setError(404, `Cannot find Category with the id ${id}`);
      } else {
        util.setSuccess(200, "Found Category", theCategory);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteCategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric value");
      return util.send(res);
    }

    try {
      const CategoryToDelete = await CategoriesService.deleteCategory(id);

      if (CategoryToDelete) {
        util.setSuccess(200, "Category deleted");
      } else {
        util.setError(404, `Category with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default CategoriesController;
