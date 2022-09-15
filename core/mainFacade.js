import express from "express";
import bodyParser from "body-parser";
import { mainRouter } from "../routes/mainRouter.js";
import { userRouter } from "../routes/userRouter.js";
export default class MainFacade {
    constructor() {
        this.app = express();
        this.PORT = 5000;
    }
    setUpMiddlewares() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(express.static("public"));
        this.app.set("view engine", "pug");
    }
    setUpRoutes() {
        this.app.use("/", mainRouter);
        this.app.use("/users", userRouter);
    }
    startListening() {
        this.app.listen(this.PORT, () => {
            console.log(`Listening on port ${this.PORT}`);
        });
    }
    start() {
        this.setUpMiddlewares();
        this.setUpRoutes();
        this.startListening();
    }
}
