import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import recipesRouter from "./recipes.js";
import blogsRouter from "./blogs.js";
import timeslotsRouter from "./timeslots.js";
import bookingsRouter from "./bookings.js";
import adminRouter from "./admin.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(recipesRouter);
router.use(blogsRouter);
router.use(timeslotsRouter);
router.use(bookingsRouter);
router.use(adminRouter);

export default router;
