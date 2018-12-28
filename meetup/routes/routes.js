import express from "express";
import meetupController from "../controllers/meetupController";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "welcome"
  });
});
router.get("/api/v1/meetups", meetupController.getMeetup);
router.post("/api/v1/meetups", meetupController.createMeetup);
router.get("/api/v1/meetups/:id", meetupController.getOnemeetup);
router.put("/api/v1/meetups/:id", meetupController.updateMeetup);
router.delete("/api/v1/meetups/:id", meetupController.deleteMeetup);

export default router;
