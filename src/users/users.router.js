const router = require('express').Router()

const userServices = require('./users.services')
const passportJWT = require("../middle/auth.middleware")

//? /api/v1/users
router.get("/", userServices.getAllUsers);
router.post("/", userServices.postNewUser);

//? /api/v1/users/:id
router.get("/:id", passportJWT, userServices.getUserById);
router.patch("/:id", passportJWT, userServices.patchUser);
router.delete("/:id", passportJWT, userServices.deleteUser);

//? /api/v1/users/me
router.get("/me", passportJWT, userServices.getMyUser);
router.patch("/me", passportJWT, userServices.patchMyUser);
router.delete("/me", passportJWT, userServices.deleteMyUser);

module.exports = router;