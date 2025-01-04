import express from "express";
import {register, login, logout} from "../controllers/index.js"
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();


router.route('/register').post(register);
router.route('/login').post(login);

// router.route('/profile').post(isAuthenticated, setProfile);
// router.route('/profile').get(isAuthenticated, viewProfile);
// router.route('/profile/update').put(isAuthenticated, updateProfile);

router.route('/logout').get(isAuthenticated, logout);

export default router;