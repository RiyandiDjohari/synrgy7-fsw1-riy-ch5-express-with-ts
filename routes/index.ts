import { Router } from "express"
import peopleRouter from "./peopleRouter";
import productsRouter from "./productsRouter";
import booksRouter from "./booksRouter";

const router = Router();

router.use('/people', peopleRouter)
router.use('/products', productsRouter)
router.use('/books', booksRouter)

export default router;