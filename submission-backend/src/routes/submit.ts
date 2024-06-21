import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const dbFilePath = path.resolve(__dirname, '../../db/db.json');

interface Submission {
  name: string;
  email: string;
  phone: string;
  github_link: string;
  stopwatch_time: number;
}

router.post('/', (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;

  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  let data: Submission[] = [];
  try {
    data = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
  } catch (err) {
    console.error('Error reading database file:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }

  const newSubmission: Submission = {
    name,
    email,
    phone,
    github_link,
    stopwatch_time
  };
  data.push(newSubmission);

  try {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (err) {
    console.error('Error writing to database file:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
