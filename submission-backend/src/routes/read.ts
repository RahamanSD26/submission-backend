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

router.get('/', (req: Request, res: Response) => {
  const { index } = req.query;
  const submissionIndex = parseInt(index as string);

  let data: Submission[] = [];
  try {
    data = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
  } catch (err) {
    console.error('Error reading database file:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }

  if (isNaN(submissionIndex) || submissionIndex < 0 || submissionIndex >= data.length) {
    return res.status(400).json({ error: 'Invalid index' });
  }

  const submission = data[submissionIndex];
  res.json(submission);
});

export default router;
