const { signup, signIn } = require("../Controllers/auth.controller");
const { verifySignUpRequest, verifySignInRequest } = require("../Middleweres/auth.middlewares");



module.exports = (app) =>{

    app.post("/mba/api/v1/auth/signup", [verifySignUpRequest], signup);
    app.post("/mba/api/v1/auth/signIn", [verifySignInRequest], signIn);

}