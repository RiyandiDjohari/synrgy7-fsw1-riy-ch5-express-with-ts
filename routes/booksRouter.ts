import { Router } from "express";
import {
  getBooks,
  getBooksById,
  createBooks,
  deleteBooks,
  updateBooks,
} from "../service/booksService";

const router = Router();

router.get("/", getBooks);
router.get("/:id", getBooksById);
router.post("/", createBooks);
router.delete("/:id", deleteBooks);
router.put("/:id", updateBooks);

export default router;
