import { Router } from "express";
import {
  getProducts,
  getProductsById,
  createProducts,
  deleteProducts,
  updateProducts,
} from "../service/productsService";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductsById);
router.post("/", createProducts);
router.delete("/:id", deleteProducts);
router.put("/:id", updateProducts);

export default router;
