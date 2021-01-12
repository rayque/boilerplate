require('dotenv').config();
import express from  'express';
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);
const host: any = process.env.HOST;
const port: any = process.env.PORT;

const proc = app.listen(port, host, () => {
    const addr = proc.address();
    // @ts-ignore
    console.log(`Server running on ${addr.address}:${addr.port}`);
});