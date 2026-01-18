🚀 Sanidhya Somani – Portfolio Website

A personal portfolio website built to showcase my skills, projects, and experience as a Frontend / Full Stack Developer.
The website includes a fully functional contact form powered by a Node.js backend.

🌐 Live Demo

Frontend: https://your-portfolio.vercel.app

Backend API: https://your-backend.onrender.com

(Replace these links after deployment)

📌 Features

Responsive and modern UI using React and Tailwind CSS

Client-side routing with React Router

Mobile-friendly navigation

Contact form with:

Form validation

Backend API integration

Email notifications using Nodemailer

Clean and scalable project structure

🛠️ Tech Stack
Frontend

React.js

Tailwind CSS

React Router DOM

JavaScript (ES6+)

Backend

Node.js

Express.js

Nodemailer

REST APIs

Tools & Platforms

Git & GitHub

Vercel (Frontend Deployment)

Render (Backend Deployment)

📁 Project Structure
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   ├── layout/
│   │   ├── MainLayout.jsx
│   └── App.jsx
│
├── contact-backend/
│   ├── routes/
│   │   └── contact.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── public/
├── package.json
└── README.md

⚙️ Installation & Setup (Local)
1️⃣ Clone the repository
git clone https://github.com/sanidhyasomani47-commits/Portfolio.git
cd Portfolio

2️⃣ Frontend Setup
npm install
npm run dev


Frontend runs on:

http://localhost:5173

3️⃣ Backend Setup
cd contact-backend
npm install
node server.js


Backend runs on:

http://localhost:5000

4️⃣ Environment Variables (Backend)

Create a .env file inside contact-backend:

EMAIL=yourgmail@gmail.com
EMAIL_PASSWORD=your_app_password


⚠️ Use a Gmail App Password, not your actual Gmail password.

📬 Contact Form Workflow

User fills out the contact form

Frontend sends a POST request to backend

Backend validates data

Email is sent using Nodemailer

User receives success or error feedback in UI

🧠 What I Learned

Building scalable React component architecture

Handling form validation and UX feedback

Creating REST APIs with Express

Securely managing environment variables

Deploying full-stack applications

📈 Future Improvements

Add MongoDB to store contact messages

Add animations with Framer Motion

Add spam protection (reCAPTCHA)

Improve accessibility (ARIA roles)

👤 Author

Sanidhya Somani

GitHub: https://github.com/sanidhyasomani47-commits

LinkedIn: https://linkedin.com/in/your-profile

Portfolio: https://your-portfolio.vercel.app
