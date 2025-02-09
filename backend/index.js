import express from 'express';
import db from "./startup/db.js";
import routes from "./startup/routes.js";
import cors from 'cors';    


const app = express();

app.use(cors());
db();
routes(app);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
