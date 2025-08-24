# Full-Stack Web Application

A modern, full-stack web application built with React, Node.js, and PostgreSQL.

## 🏗️ Project Structure

```
webapp/
├── frontend/          # React + TypeScript frontend
├── backend/           # Node.js + Express backend
├── shared/            # Shared types and utilities
├── package.json       # Root package.json (monorepo)
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+
- PostgreSQL 14+
- Git

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo>
   cd webapp
   npm run install:all
   ```

2. **Set up environment variables:**
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your database credentials
   ```

3. **Set up the database:**
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

4. **Start development servers:**
   ```bash
   npm run dev
   ```

This will start both frontend (http://localhost:3000) and backend (http://localhost:5000) servers.

## 📁 Workspace Details

### Frontend (`/frontend`)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Headless UI
- **State Management**: Zustand
- **HTTP Client**: Axios

### Backend (`/backend`)
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **Validation**: Zod
- **Testing**: Jest + Supertest

### Shared (`/shared`)
- **Types**: Common TypeScript interfaces
- **Utilities**: Shared helper functions
- **Constants**: Application constants

## 🛠️ Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build all workspaces for production
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio for database management

## 🌐 API Endpoints

The backend provides RESTful API endpoints:

- `GET /api/health` - Health check
- `POST /api/auth/login` - User authentication
- `GET /api/users` - Get users (protected)
- `POST /api/users` - Create user (protected)

## 🗄️ Database Schema

The application uses PostgreSQL with the following main entities:
- Users (authentication and profile data)
- Posts (content management)
- Comments (user interactions)

## 🔧 Development

### Code Style
- ESLint + Prettier for code formatting
- Husky for pre-commit hooks
- Conventional commits for version control

### Testing
- Frontend: Vitest + Testing Library
- Backend: Jest + Supertest
- E2E: Playwright (optional)

## 📦 Deployment

### Frontend
- Build with `npm run build:frontend`
- Deploy to Vercel, Netlify, or any static hosting

### Backend
- Build with `npm run build:backend`
- Deploy to Railway, Heroku, or any Node.js hosting

### Database
- Use managed PostgreSQL (Supabase, Railway, etc.)
- Or self-hosted PostgreSQL instance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details
