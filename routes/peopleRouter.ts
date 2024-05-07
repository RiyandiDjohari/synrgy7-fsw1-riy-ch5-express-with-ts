import { Router } from "express"
import { idChecker } from "../middleware"
import { getPeople, getPeopleById, createPeople, deletePeople, updatePeople } from "../service/peopleService"

const router = Router();

router.get('/', getPeople)
router.get('/:id', idChecker, getPeopleById)
router.post('/', createPeople)
router.delete('/:id', idChecker ,deletePeople)
router.put('/:id', idChecker, updatePeople)

export default router;
