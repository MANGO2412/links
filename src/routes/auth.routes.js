import { Router } from 'express'
import {renderSignIn,renderSignUp, signUp,logout, signIn} from '../controllers/auth.controller.js'
import {validator} from '../middlewares/validator.middleware.js'
import {signinSchema,signupSchema} from '../schemas/auth.schema.js';
import {isLoggedIn,isNotLoggedIn} from '../middlewares/protectedRoutes.js'
const router=Router();
router.get('/signin',isNotLoggedIn,renderSignIn);
router.post('/signin',isNotLoggedIn,validator(signinSchema),signIn)

router.get('/signup',isNotLoggedIn,renderSignUp);
router.post('/signup',isNotLoggedIn,validator(signupSchema),signUp)

router.get('/logout',isLoggedIn,logout)
export default router;