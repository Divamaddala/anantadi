# Video Management Application

A full-stack MERN application for managing video collections, with Docker containerization and Google Drive integration.

## Features

- User authentication with JWT
- Video upload from Google Drive
- Video metadata management
- Filtering and pagination
- Responsive UI with video player
- Docker containerization for all services

## Tech Stack

- Frontend: React, React Router, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Passport.js with JWT
- Container: Docker & Docker Compose
- Additional: Google Drive API integration

## Prerequisites

- Docker and Docker Compose installed
- Google Cloud Platform account with Drive API enabled
- Node.js and npm (for local development)

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd video-management-app
```

2. Create `.env` files:

Backend (.env):
```
MONGODB_URI=mongodb://mongodb:27017/videodb
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

3. Start the application using Docker Compose:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
.
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── utils/
│   │   └── App.js
│   ├── Dockerfile
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
```

## Development

For local development without Docker:

1. Start MongoDB:
```bash
docker-compose up mongodb
```

2. Start the backend:
```bash
cd backend
npm install
npm run dev
```

3. Start the frontend:
```bash
cd frontend
npm install
npm start
```

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/videos` - Get paginated videos
- `POST /api/videos/upload` - Upload video from Google Drive

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
