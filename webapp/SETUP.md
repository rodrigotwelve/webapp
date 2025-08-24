# 🚀 WebApp Setup Guide

This guide will walk you through setting up the complete full-stack web application on your local machine.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ (comes with Node.js)
- **PostgreSQL** 14+ ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/))

## 🏗️ Project Structure

```
webapp/
├── frontend/          # React + TypeScript frontend
├── backend/           # Node.js + Express backend
├── shared/            # Shared types and utilities
├── package.json       # Root package.json (monorepo)
└── README.md         # Project documentation
```

## ⚡ Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd webapp

# Install all dependencies
npm run install:all
```

### 2. Database Setup

#### Option A: Local PostgreSQL

1. **Install PostgreSQL** on your machine
2. **Create a database:**
   ```sql
   CREATE DATABASE webapp;
   CREATE USER webapp_user WITH ENCRYPTED PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE webapp TO webapp_user;
   ```

#### Option B: Cloud Database (Recommended for beginners)

- **Supabase** (Free tier): [https://supabase.com](https://supabase.com)
- **Railway**: [https://railway.app](https://railway.app)
- **Neon**: [https://neon.tech](https://neon.tech)

### 3. Environment Configuration

```bash
# Copy environment template
cp backend/env.example backend/.env

# Edit the .env file with your database credentials
nano backend/.env
```

**Required environment variables:**
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/webapp?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="7d"

# Server
PORT=5000
NODE_ENV="development"
```

### 4. Database Migration

```bash
# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# (Optional) Seed with sample data
npm run db:seed
```

### 5. Start Development Servers

```bash
# Start both frontend and backend
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **Prisma Studio**: http://localhost:5555 (optional)

## 🔧 Development Commands

### Root Level (Monorepo)
```bash
npm run dev              # Start both servers
npm run build            # Build all workspaces
npm run install:all      # Install all dependencies
```

### Backend
```bash
npm run dev:backend      # Start backend only
npm run build:backend    # Build backend
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Run migrations
npm run db:studio        # Open Prisma Studio
npm run db:seed          # Seed database
npm run test             # Run tests
```

### Frontend
```bash
npm run dev:frontend     # Start frontend only
npm run build:frontend   # Build frontend
npm run test             # Run tests
npm run lint             # Lint code
npm run format           # Format code
```

## 🗄️ Database Management

### Prisma Studio
```bash
npm run db:studio
```
Opens a web interface to view and edit your database data.

### Manual Database Operations
```bash
# Reset database (⚠️ Destructive)
npm run db:reset

# Generate new migration
npx prisma migrate dev --name migration_name

# Deploy migrations to production
npx prisma migrate deploy
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm run test             # Run all tests
npm run test:watch       # Watch mode
npm run test:coverage    # Coverage report
```

### Frontend Tests
```bash
cd frontend
npm run test             # Run all tests
npm run test:ui          # UI test runner
npm run test:coverage    # Coverage report
```

## 🚀 Production Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Heroku)
```bash
cd backend
npm run build
# Deploy the dist/ folder
```

### Database
- Use managed PostgreSQL (Supabase, Railway, etc.)
- Set `NODE_ENV=production`
- Update `DATABASE_URL` to production database

## 🔍 Troubleshooting

### Common Issues

#### 1. Database Connection Failed
- Check if PostgreSQL is running
- Verify database credentials in `.env`
- Ensure database exists

#### 2. Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or change port in .env
PORT=5001
```

#### 3. Prisma Client Not Generated
```bash
npm run db:generate
```

#### 4. Dependencies Issues
```bash
# Clear all node_modules and reinstall
rm -rf node_modules package-lock.json
rm -rf frontend/node_modules backend/node_modules shared/node_modules
npm run install:all
```

### Getting Help

1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure database is accessible
4. Check if all services are running

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

**Happy coding! 🎉**

If you encounter any issues, please check the troubleshooting section or create an issue in the repository.
