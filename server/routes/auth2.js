import express from "express";

const router = express.Router();

router.get("/displayname", (req, res) => {
  res.setHeader("colour", "red,green,blue");
  res.json({
    appName: "first mern application!",
    colours: ["red", "green", "blue"],
  });
});

export default router;
