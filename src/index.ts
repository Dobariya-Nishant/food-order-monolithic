import { app } from "./app";

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
