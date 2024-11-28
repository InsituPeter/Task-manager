import { Router } from "express";
const router = Router()
import { getAllTasks, createTasks, getTasks, updateTasks, deleteTasks } from "../controllers/task.js";

router.route("/").get(getAllTasks).post(createTasks)
router.route("/:id").get(getTasks).patch(updateTasks).delete(deleteTasks)

export default router
