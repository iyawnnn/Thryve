# Thryve – Health and Fitness Web Application

Thryve is a full-stack Health and Fitness web application built using the MEVN stack (MongoDB, Express.js, Vue.js, Node.js). It provides a unified platform for users to monitor workouts, meals, water intake, and sleep while offering personalized daily targets, dashboard analytics, and achievement tracking. The platform integrates multiple health metrics into a single system, supporting secure user authentication, profile customization, and visual progress insights. Thryve is designed for fitness enthusiasts, health-conscious individuals, and anyone looking for structured guidance to maintain a healthy lifestyle.

## Tech Stack

### Frontend
- **Framework & State Management:** Vue 3, Pinia
- **Routing & API:** Vue Router, Axios
- **Build Tool & Plugins:** Vite, @vitejs/plugin-vue
- **UI Libraries & Styling:** PrimeVue, PrimeIcons, @primeuix/themes
- **Date & Animation:** Flatpickr, tw-animate-css
- **Charts & Visualization:** Chart.js, ApexCharts, vue3-apexcharts
- **Utility Libraries:** @vueuse/core, clsx, class-variance-authority, lucide-vue-next
- **Analytics:** @vercel/analytics

### Backend
- **Runtime & Framework:** Node.js, Express.js
- **Database & ORM:** MongoDB, Mongoose
- **Authentication & Security:** JWT (jsonwebtoken), bcrypt, bcryptjs, helmet, express-rate-limit
- **Validation:** express-validator, Joi
- **Email Services:** SendGrid (@sendgrid/mail)
- **CORS & Middleware:** cors
- **Logging & Dev Tools:** morgan, nodemon, eslint, prettier
- **Environment Variables:** dotenv

## Core Features

### User & Profile
- User registration and login
- JWT-based authentication
- Password recovery via SendGrid
- Profile setup (age, height, weight, gender)
- Custom daily targets: calories, protein, workout duration

### Health Tracking Modules
- Workout logging and tracking
- Meal and calorie tracking
- Water intake monitoring
- Sleep tracking

### Insights & Motivation
- Dashboard analytics with charts for weekly/daily progress
- Achievement and goal tracking

### Integrated System
- Unified platform combining multiple health metrics
- Modular and scalable architecture
- Responsive and consistent user interface


## Development Workflow

### 1. Planning & Architecture
- Defined system workflow and data relationships
- Designed MEVN folder structure and API endpoints
- Outlined data models for users, workouts, meals, sleep, water intake, and achievements

### 2. Backend Implementation
- Built REST API routes for all modules
- Integrated SendGrid for email services
- Implemented JWT authentication and middleware
- Added validation, error handling, and security measures

### 3. Frontend Implementation
- Configured Vue 3 with Vite, Router, and Pinia
- Built reusable components for forms, dashboards, and trackers
- Integrated frontend with backend API endpoints
- Developed responsive UI with charts, animations, and notifications

### 4. Testing & Refinement
- Tested API endpoints and error responses
- Debugged CORS, authentication, and state management issues
- Optimized user experience and modular component architecture

## Key Takeaways
- Developed a full MEVN stack application end-to-end
- Implemented secure authentication using JWT and bcrypt
- Built RESTful APIs with validation and error handling
- Modeled data efficiently with Mongoose for MongoDB
- Integrated SendGrid for email recovery and notifications
- Created dynamic, interactive dashboards with charts
- Designed a modular and scalable frontend with Vue 3 and Pinia
- Managed environment variables safely for public repositories
- Applied frontend libraries and utilities for responsive, modern UI


## Installation Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/iyawnnn/Thryve.git
cd Thryve
```

2. Navigate to the project directory:
```bash
cd Thryve
```

3. Install backend dependencies
```bash
cd thryve-backend
npm install
```

4. Install frontend dependencies
```bash
cd thryve-frontend
npm install
```

5. Create a .env file (backend root) then, fill up the environment variables:
```bash
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority&appName=<appName>
JWT_SECRET=<jwt_secret>
JWT_EXPIRES_IN=1h
FRONTEND_ORIGIN=http://localhost:5173
FRONTEND_URL=http://localhost:5173
EMAIL_USER=<email@example.com>
EMAIL_PASS=<email_password>
SENDGRID_API_KEY=<your_sendgrid_api_key>
EMAIL_FROM=<verified_sender_email>
```
6. Create a .env file (frontend root) then, fill up the environment variables:
```bash
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

1. Make sure MongoDB is running locally or your cloud MongoDB connection is properly configured in the backend `.env` file.

2. Start the backend server:
```bash
cd thryve-backend
npm run dev
```

3. In a seperate terminal, start the frontend server
```bash
cd thryve-frontend
npm run dev
```

4. Open your web browser and navigate to the frontend URL defined in .env (default: http://localhost:5173) to access the application.

3. Log in or register a new account, set your profile and daily targets, and start using the features.

## Usage
- Register a new account or log in.
- Customize your profile and set daily targets (calories, protein, workouts).
- Log workouts, meals, water intake, and sleep patterns.
- View the dashboard for analytics and track achievements.
