import { Router } from "express";
import {isLoggedIn} from "../middlewares/protectedRoutes.js"
import {validator} from "../middlewares/validator.middleware.js"
import {createLinkSchema} from '../schemas/task.schema.js';

import { renderAddLink } from "../controllers/links.controller.js";
import { addLink } from "../controllers/links.controller.js";
import { renderLinks } from "../controllers/links.controller.js";
import { renderEditLink } from "../controllers/links.controller.js";
import { editLink } from "../controllers/links.controller.js";
import { deleteLink } from "../controllers/links.controller.js";
const router=Router();

router.get('/',isLoggedIn,renderLinks);
router.get("/add",isLoggedIn,renderAddLink);
router.post("/add",isLoggedIn,validator(createLinkSchema),addLink);
router.get('/edit/:id',isLoggedIn,renderEditLink);
router.post('/edit/:id',isLoggedIn,editLink);
router.get('/delete/:id',isLoggedIn,deleteLink);

export default router;

