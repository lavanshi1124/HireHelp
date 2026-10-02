# Resume Interview AI Planner

A full-stack application that helps job seekers prepare for interviews by analyzing a resume or self-description against a target job description. The platform uses AI to generate:

- a match score
- technical and behavioral interview questions
- skill gap analysis
- a tailored preparation plan
- a polished resume PDF aligned to the target role

This project combines a Node.js/Express backend with a React + Vite frontend.

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- Multer for PDF upload handling
- Google GenAI (Gemini)
- Puppeteer for PDF generation

### Frontend
- React 19
- Vite
- React Router
- SCSS
- Axios

---

## Features

- User registration and login
- Protected interview report routes
- PDF resume upload support
- Optional self-description fallback
- AI-generated interview strategies based on job description + profile
- Personalized skill-gap insights
- Downloadable resume PDF generated from the job target
- Saved interview history per authenticated user

---

## Project Structure

```bash
RESPROJ/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── interview.controller.js
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js
│   │   │   └── file.middleware.js
│   │   ├── models/
│   │   │   ├── blacklist.model.js
│   │   │   ├── interviewReport.Model.js
│   │   │   └── user_model.js
│   │   ├── routes/
│   │   │   ├── auth_routes.js
│   │   │   └── interview.routes.js
│   │   └── services/
│   │       └── ai.service.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── .gitignore
├── README.md
└── package.json (if present at repo root)
```

---

## Prerequisites

Before running the app, make sure you have:

- Node.js 18+ and npm
- MongoDB running locally or a MongoDB connection URI
- A Google AI API key for Gemini

---

## Environment Setup

### Backend environment
Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/resproj
JWT_SECRET=your_super_secret_key
GOOGLE_GENAI_API_KEY=your_google_ai_api_key
```

### Notes
- The backend server listens on port `3000`.
- The frontend dev server runs on `http://localhost:5173`.
- Auth is cookie-based, so the frontend must be served from the Vite origin allowed by the backend CORS config.

---

## Installation

### 1. Install backend dependencies

```bash
cd backend
npm install
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

---

## Running the App

### Start the backend

```bash
cd backend
npm run dev
```

### Start the frontend

```bash
cd frontend
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

## API Overview

The backend exposes endpoints under `/api`.

### Authentication
- `POST /api/auth/register` — register a new user
- `POST /api/auth/login` — login an existing user
- `POST /api/auth/logout` — logout the current user
- `GET /api/auth/me` — get current user details

### Interview
- `POST /api/interview` — generate an interview report
- `GET /api/interview` — fetch all interview reports for the logged-in user
- `GET /api/interview/report/:interviewId` — fetch a specific report
- `POST /api/interview/resume/pdf/:interviewReportId` — generate a tailored resume PDF

---

## Usage Flow

1. Register or log in.
2. Enter the target job description.
3. Upload a resume PDF or provide a short self-description.
4. Generate the interview strategy.
5. Review the generated report:
   - match score
   - technical questions
   - behavioral questions
   - skill gaps
   - preparation plan
6. Generate a tailored resume PDF for the role if needed.

---

## Important Notes

- Resume uploads are restricted to PDF files and a max size of 3MB.
- The app requires a live MongoDB instance and a valid Google GenAI API key.
- The AI-powered generation may take a few seconds depending on the request size and API latency.

---

## License

This project currently does not specify a custom license in its package metadata.

---

## Contributing

This repository is intended for personal or internal project use. If you want to extend it:

- keep the frontend and backend logic separated
- validate environment variables before deployment
- add tests before changing critical interview-generation behavior

