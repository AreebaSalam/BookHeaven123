// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bookRoute = require("./routes/bookRoutes");
// require("./connection/conn");
// app.use(cors());
// app.use(express.json());
// app.use("/api/v1",bookRoute);
// app.listen(1000,()=>{
//     console.log("SERVER STARTED SUCCESSFULLY");
// });

const express = require("express");
const cors = require("cors");
const bookRoute = require("./routes/bookRoutes");
require("./connection/conn");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", bookRoute);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`SERVER STARTED SUCCESSFULLY on port ${PORT}`);
});
