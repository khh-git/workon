import app from "./app";
import connectToDB from "./db";

const PORT = 5000;

(() => {
  connectToDB();
  app.listen(PORT, () => {
    console.log(`Server started sucessfully at PORT: ${PORT}`);
  });
})();
