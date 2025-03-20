// routes/schoolRoutes.js
import express from "express";
import listAllSchools from "../controllers/listSchool.js";

const listSchoolRouter = express.Router();

// List Schools API - Sorted by distance
listSchoolRouter.get("/listschools", listAllSchools);

export default listSchoolRouter;
