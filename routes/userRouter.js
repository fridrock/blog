import { Router } from "express";
import { userController } from "../controllers/userController.js";
const userRouter = Router();
userRouter.get("/", async (req, res) => {
    const result = await userController.getUsers();
    res.render("users", { result });
});
userRouter.get("/reg", (req, res) => {
    res.render("reg");
});
userRouter.get("/auth", (req, res) => {
    res.render("auth");
});
userRouter.post("/reg", async (req, res) => {
    userController.createUser(req, res);
});
userRouter.post("/auth", async (req, res) => {
    userController.authUser(req, res);
});
export { userRouter };
