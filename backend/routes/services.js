import express from "express";

import {
    getProducts
  } from "../controllers/services.js";

const router = express.Router();

router.get("/hair", getProducts);

export default router;