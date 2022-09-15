class MainController {
    sendMainPage(req, res) {
        res.render("main");
    }
    sayhi(req, res) {
        res.send("Hello world");
    }
}
const mainController = new MainController();
export { mainController };
