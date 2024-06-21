import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

import pingRoute from './routes/ping';
import submitRoute from './routes/submit';
import readRoute from './routes/read';

app.use('/ping', pingRoute);
app.use('/submit', submitRoute);
app.use('/read', readRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
