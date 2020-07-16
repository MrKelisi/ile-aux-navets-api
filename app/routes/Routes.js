const AuthController  = require("../controllers/AuthController");
const FacesController = require("../controllers/FacesController");
const PhotoController = require("../controllers/PhotoController");
const UsersController = require("../controllers/UsersController");
const WeeksController = require("../controllers/WeeksController");

const AuthInterceptor = require("../interceptors/AuthInterceptor");
const CorsInterceptor = require("../interceptors/CorsInterceptor");

module.exports = (app) => {
  app.use(CorsInterceptor);
  app.get("/", (req, res) => { res.json({message: "Welcome to the turn-api."}) });

  // auth
  app.post("/auth/login", AuthController.login);
  app.post("/auth/register", AuthController.register);

  // photo
  app.get("/photo/:username", PhotoController.fromUsername);
  app.get("/photo/:skin_color/:hair/:hair_color/:eyes/:eyes_color/:nose/:mouth", PhotoController.fromParams);

  // users
  app.get("/users", AuthInterceptor, UsersController.findAll);
  app.get("/users/:username", AuthInterceptor, UsersController.find);
  app.put("/users/:username", AuthInterceptor, UsersController.update);
  app.delete("/users/:username", AuthInterceptor, UsersController.delete);

  // faces
  app.get("/faces/:username", AuthInterceptor, FacesController.find);
  app.put("/faces/:username", AuthInterceptor, FacesController.update);

  // weeks
  app.get("/weeks/:username", AuthInterceptor, WeeksController.findAll);
  app.get("/weeks/:username/:date", AuthInterceptor, WeeksController.find);
};
