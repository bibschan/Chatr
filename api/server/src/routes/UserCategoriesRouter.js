import { Router } from "express";
import UserCategoriesController from "../controllers/UserCategoriesController";

const router = Router();

router.get("/", UserCategoriesController.getAllUserCategories);
router.post("/", UserCategoriesController.addUserCategory);
router.get("/:id", UserCategoriesController.getAUserCategory);
router.put("/:id", UserCategoriesController.updatedUserCategory);
router.delete("/:id", UserCategoriesController.deleteUserCategory);
router.get("/getChannels/:id", UserCategoriesController.getChannels);

export default router;
