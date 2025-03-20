// routes/schoolRoutes.js
import express from "express";

import addSchoolValidation from "../controllers/addSchool.js";

const addSchoolRouter = express.Router();

// Add School API Route
addSchoolRouter.post("/addschool", addSchoolValidation);

export default addSchoolRouter;
