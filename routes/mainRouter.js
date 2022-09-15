import { Router } from "express";
import { mainController } from "../controllers/mainController.js";
const mainRouter = Router();
mainRouter.get("/", mainController.sendMainPage);
mainRouter.get("/hi", mainController.sayhi);
export { mainRouter };
