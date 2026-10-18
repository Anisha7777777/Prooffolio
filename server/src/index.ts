import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import type { NextFunction, Request, Response } from 'express';

const app = express();
const port = Number(process.env.PORT) || 5000;
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(cors({ origin: clientOrigin }));
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.status(200).json({ status: 'ok', service: 'prooffolio-api' });
});

app.use((_request, response) => {
  response.status(404).json({ error: 'Route not found' });
});

app.use((error: unknown, _request: Request, response: Response, _next: NextFunction) => {
  console.error('Unhandled request error:', error);
  response.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Prooffolio API listening on http://localhost:${port}`);
  console.log(`CORS allows the frontend at ${clientOrigin}`);
});
