import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import userRouter from './routers/user/user-router';
import RouterEnum from './utils/routers';
app.use(`/${RouterEnum.User}`, userRouter);
app.get('/', (req, res) => {
    res.send('Node.js and TypeScript API');
});

export default app;