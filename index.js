import express from "express";
import { json } from "express";
import cors from "cors";
import { writeFileSync } from "fs";

const app = express();

app.use(json());
app.use(cors());

app.post("/structure", (req, res) => {
  const structure = JSON.stringify(req.body);
  writeFileSync("structure.json", structure);
  res.json({ message: "File saved to disk." });
});

app.listen(3000, () => console.log("listening on http://localhost:3000"));
