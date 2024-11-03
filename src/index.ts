import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import type { NewsResponse, ReqQuery } from './interfaces';
import { api } from './lib/axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('News Circuit');
});

app.get('/news', async (req: Request, res: Response) => {
  const { categories, keywords, languages, limit, offset } =
    req.query as ReqQuery;

  let url = `/news?access_key=${process.env.ACCESS_KEY}`;

  if (categories) {
    url += `&categories=${categories}`;
  }

  if (keywords) {
    url += `&keywords=${keywords}`;
  }

  if (languages) {
    url += `&languages=${languages}`;
  }

  if (limit) {
    url += `&limit=${limit}`;
  }

  if (offset) {
    url += `&offset=${offset}`;
  }

  try {
    const response: NewsResponse = await api.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

const PORT = parseInt(process.env.PORT || '3000');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
