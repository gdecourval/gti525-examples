import { Router } from "express";
import controller from "../controllers/tracks.js";

const router = Router();

router.route("/")
    .get(controller.all);

router.route("/final_exam_q5")
.get(controller.final_exam_q5);

router.route("/:trackId")
    .get(controller.trackById);

export default router;