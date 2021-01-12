import express from  'express';
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

const proc = app.listen(3001, '0.0.0.0', () => {
    const addr = proc.address();
    // @ts-ignore
    console.log(`Server running on ${addr.address}:${addr.port}`);
});