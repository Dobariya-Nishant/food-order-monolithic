import { app } from "./app";
import { connectDB } from "./db/connection";

await connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
