# Prooffolio

Prooffolio is a portfolio platform for developers to showcase projects and the proof behind them: skills, technical decisions, GitHub work, demos, and lessons learned. Built with React, TypeScript, Vite, Tailwind CSS, Node.js, and Express.

## Phase 1 foundation

This Phase 1 foundation includes a React + TypeScript frontend, an Express + TypeScript backend, basic page routing, a responsive Proof Board landing page, and a health endpoint. Authentication, MongoDB, and project management are intentionally left for later phases.

## Requirements

- Node.js with npm
- A terminal opened in the project root

## Setup

1. Copy `client/.env.example` to `client/.env` and `server/.env.example` to `server/.env`.
2. Install all workspace dependencies from the root:

   ```sh
   npm install
   ```

## Run in development

From the project root:

```sh
npm run dev
```

The frontend is served at `http://localhost:5173`. The API is served at `http://localhost:5000`. Check `http://localhost:5000/api/health` to confirm the backend responds.

## Other commands

```sh
npm run typecheck
npm run build
```

`typecheck` checks TypeScript types. `build` creates production-ready frontend files and compiled backend JavaScript.

## Environment variables

`client/.env` contains only public browser configuration. Vite exposes variables beginning with `VITE_` to browser code; never put passwords, private API keys, or database credentials there. `server/.env` is for server-side configuration and is ignored by Git. The `.env.example` files contain safe local defaults only.
