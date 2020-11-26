const passport = require("passport");

exports.post = ('/', function (req, res, next) {
    req.flash();
    passport.authenticate("local",{
        successRedirect: "/?pag=0&tipo=0",
        failureRedirect: "/index",
        failureFlash: true
    })(req,res,next)
});
