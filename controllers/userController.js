import { userModel } from "../models/User.js";
class UserController {
    constructor() {
        this.userModel = userModel;
    }
    async getUsers() {
        const result = await this.userModel.getUsers();
        return result;
    }
    async createUser(req, res) {
        //getting data from request body
        const { login, password } = req.body;
        //looking for existring user with that login
        const userCandidate = (await this.userModel.checkLogin(login))[0];
        if (userCandidate) {
            // there is user with that login
            res.send(JSON.stringify({ message: "This login already exists" }));
        } else {
            // if there are no users with that login create new user
            await this.userModel.createUser(login, password);
            res.send(JSON.stringify({ message: "successfully created user" }));
        }
    }
    async authUser(req, res) {
        const { login, password } = req.body;
        const userCandidate = (await this.userModel.checkLogin(login))[0];
        // check if there is user with that login, after that sending message depends on error
        if (userCandidate) {
            if (userCandidate.password != password) {
                res.send(JSON.stringify({ message: "wrong password" }));
            } else {
                res.send(JSON.stringify({ message: "Authorised" }));
            }
        } else {
            res.send(JSON.stringify({ message: "no such user" }));
        }
    }
}
const userController = new UserController();
export { userController };
