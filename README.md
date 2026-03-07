# 🔐 Flask Authentication System (Flask + Vercel + PostgreSQL)

A **production-ready authentication system built with Flask** that supports user registration, login, logout, and password reset functionality.

This application is deployed using **Vercel serverless functions** and uses **Neon PostgreSQL** as the cloud database.

---

# 🚀 Live Demo

🌐 **Live Website**
https://flask-auth-system-groot.vercel.app

---

# ✨ Features

✔ User Registration
✔ Secure Login / Logout
✔ Login using **username or email**
✔ Password hashing using `Werkzeug`
✔ Password reset system with secure tokens
✔ Strong password validation rules
✔ Protected dashboard route
✔ Session management with **Flask-Login**
✔ PostgreSQL cloud database (Neon)
✔ Serverless deployment on **Vercel**
✔ **Vercel Web Analytics** for visitor tracking and insights

---

# 🛠 Tech Stack

| Technology              | Purpose                             |
| ----------------------- | ----------------------------------- |
| **Flask**               | Backend Web Framework               |
| **Flask-Login**         | Authentication & session management |
| **Flask-SQLAlchemy**    | ORM for database operations         |
| **PostgreSQL (Neon)**   | Cloud database                      |
| **psycopg2**            | PostgreSQL adapter                  |
| **Werkzeug**            | Password hashing                    |
| **itsdangerous**        | Secure token generation             |
| **Vercel**              | Serverless deployment platform      |
| **Vercel Web Analytics**| Website analytics and visitor insights|

---

# 📂 Project Structure

```
flask-auth-system
│
├── app.py
├── requirements.txt
├── vercel.json
├── README.md
├── .gitignore
│
├── templates
│   ├── base.html
│   ├── dashboard.html
│   ├── forgot_password.html
│   └── reset_password.html
│
└── static
    ├── style.css
    ├── script.js
    └── bg.jpg
```

---

# 📸 Application Screenshots

*(You can add screenshots here for better presentation)*

### Login Page

![Login Page](assets/login.png)
![Login Page](assets/mobile-login.png)

### Registration Page

![Register Page](assets/register.png)
![Register Page](assets/mobile-register.png)

### Dashboard

![Dashboard](assets/dashboard.png)
![Dashboard](assets/mobile-dashboard.png)

---

# 🏗 System Architecture

```
User Browser
      ↓
Vercel Serverless Flask Application
      ↓
Neon PostgreSQL Cloud Database
```

Flow:

1. User sends request from browser
2. Flask serverless function processes request
3. SQLAlchemy communicates with PostgreSQL
4. Database returns data to Flask
5. Flask renders response to user

---

# ⚙️ Environment Variables

The following environment variables must be configured in **Vercel → Project Settings → Environment Variables**

| Variable       | Description                                    |
| -------------- | ---------------------------------------------- |
| `DATABASE_URL` | PostgreSQL connection string from Neon         |
| `SECRET_KEY`   | Secret key used for session and token security |

Example:

```
DATABASE_URL=postgresql://username:password@host/dbname?sslmode=require
SECRET_KEY=your_secure_secret_key
```

---

# 💾 Database

The application uses **PostgreSQL (Neon)**.

### User Table

| Field    | Type          |
| -------- | ------------- |
| id       | Integer       |
| username | String        |
| email    | String        |
| password | Hashed String |

Passwords are stored using **secure hashing**, never in plain text.

---

# 🔐 Security Features

• Password hashing using `generate_password_hash()`
• Password verification using `check_password_hash()`
• Secure password reset tokens using `itsdangerous`
• Strong password validation rules
• Environment variable protection for sensitive data

---

# 🧪 Running Locally

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/flask-auth-system.git
cd flask-auth-system
```

### 2️⃣ Create virtual environment

```
python -m venv venv
```

### 3️⃣ Activate environment

**Windows**

```
venv\Scripts\activate
```

**Mac / Linux**

```
source venv/bin/activate
```

### 4️⃣ Install dependencies

```
pip install -r requirements.txt
```

### 5️⃣ Configure environment variables

```
SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url
```

### 6️⃣ Run the application

```
python app.py
```

---

# 🌐 Deployment

The project is deployed using **Vercel serverless Python functions**.

Deployment steps:

1. Push project to GitHub
2. Import repository into Vercel
3. Configure environment variables
4. Deploy application

---

# 📊 Vercel Web Analytics

This application integrates **Vercel Web Analytics** to track visitor behavior and page views.

### Features

✅ Automatic page view tracking
✅ Real-time visitor analytics
✅ Performance insights
✅ Privacy-friendly (no cookies required)
✅ GDPR compliant

### Setup

Web Analytics is already integrated into all pages via the tracking script. To enable analytics in your Vercel dashboard:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** to activate Web Analytics

Once enabled, you'll be able to view:
- Page views and unique visitors
- Top pages and referrers
- Geographic distribution of visitors
- Device and browser statistics

The analytics script is injected into all HTML templates using the recommended HTML implementation:

```html
<script>
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

**Note:** Analytics data will be available in your dashboard after deployment and will start tracking once visitors access your site.

---

# 📚 Key Learnings

Through this project:

* Learned how to deploy **Flask apps on Vercel**
* Implemented **authentication using Flask-Login**
* Connected Flask with **PostgreSQL cloud database**
* Managed **environment variables for security**
* Implemented **secure password hashing**
* Handled **serverless deployment debugging**
* Built a **production-ready authentication system**

---

# 🚀 Future Improvements

Possible upgrades:

• Email sending for password reset
• JWT authentication system
• User profile management
• Admin dashboard
• REST API version of authentication
• Database migrations using Flask-Migrate
• Docker containerization

---

# 👨‍💻 Author

**Rupesh**

Python Developer | Web Developer

---

# 📄 License

This project is licensed under the **MIT License**.
