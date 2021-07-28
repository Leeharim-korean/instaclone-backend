require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  context: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI3Mzg4NjQ0fQ.5HUzC1ZSTpww1qU__ChGj1fo04UGFfB_VDCm5xnkAXc"
  },
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() =>
    console.log(`😎Server is running on http://localhost:${PORT} ✅`)
  );