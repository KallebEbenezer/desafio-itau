import { Router } from "express";
import { createOperation, getAllOperations } from "../controllers/operation_controller";
import { createUser } from "../controllers/user_controllers";
import { newAsset } from "../controllers/assets_controller";
import { newQuotation } from "../controllers/quotations_controller";
const router = Router();

router.get("/getAllOperations", getAllOperations)
router.post("/newOperation", createOperation);

router.post("/newAsset", newAsset)

router.post("/newUser", createUser);

router.post("/newQuotation", newQuotation);

export default router;