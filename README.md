# Bright Minds

Bright Minds is an innovative educational platform designed to address the challenges highlighted in the United Nations' Goal 4 for 2025: ensuring inclusive and equitable quality education for all.

The platform focuses on personalized learning experiences, catering to individual learning styles to keep students motivated and engaged.

## Problem Statement

Most educational content is often designed for a broad audience, failing to cater to the diverse learning styles of individual students. As a result, many students fall behind or lose motivation.

Bright Minds aims to solve this issue by providing tailored educational content and interactive tools that support diverse learning needs.

## Features

- **Personalized Learning**: Content tailored to individual learning styles.
- **Interactive Courses**: Engaging and dynamic courses to keep students motivated.
- **Progress Tracking**: Monitor learning progress and achievements.
- **Community Engagement**: Comment and reply features to foster collaboration and discussion.

## Installation

### Backend

1. **Clone the repository and navigate to the backend folder.**
2. **Install dependencies:** 
   ```bash
   npm install
3. **Set up the ``.env`` file with your database credentials:** 
   ```env
   DB_HOST=localhost  
   DB_USER=your_username  
   DB_PASSWORD=your_password  
   DB_NAME=your_database_name  
   DB_PORT=5432 
   JWT_SECRET=your_secret_key 
4. **Important: For migrations and seeders to work, remove ``"type": "module"``, from ``package.json``.**
5. **Run migrations:**
   ```bash
   npx sequelize-cli db:migrate --config config.cjs
6. **Seed the database:** 
   ```bash
   npx sequelize-cli db:seed:all --config=config.cjs
7. **Start the backend server:** 
   ```bash
   npm start

### Frontend

1. **Navigate to the frontend folder.**
2. **Install dependencies:** 
   ```bash
   npm install
3. **Start the development server:** 
   ```bash
   npm run dev

## Usage

1. Open the application in your browser at http://localhost:5173/.
2. Sign up or log in to access personalized learning content.
3. Explore courses, track your progress, and engage with the community.

## Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)

### Authentication

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)


## License
