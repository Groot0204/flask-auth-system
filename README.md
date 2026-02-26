# 🔐 Flask Authentication System

A modern, responsive authentication system built using **Flask**, featuring login, registration, password reset, and a clean glassmorphism UI. This project demonstrates full-stack authentication logic with secure password handling and responsive frontend design.

---

## 🚀 Live Features

* ✅ User Registration
* ✅ Login with Username or Email
* ✅ Secure Password Hashing
* ✅ Forgot Password with Reset Token
* ✅ Password Strength Validation
* ✅ Session Management
* ✅ Responsive UI (Desktop, Tablet, Mobile)
* ✅ Modern Glassmorphism Interface
* ✅ Flash Messages and Feedback System
* ✅ Vercel Web Analytics Integration

---

## 🛠 Tech Stack

**Backend**

* Python
* Flask
* Flask-Login
* Flask-SQLAlchemy
* Werkzeug Security

**Frontend**

* HTML5
* CSS3 (Glassmorphism UI)
* JavaScript (Responsive toggle logic)

**Database**

* SQLite (can be upgraded to PostgreSQL)

---

## 📁 Project Structure

```
flask-auth-system/
│
├── app.py
├── database.db
├── requirements.txt
│
├── templates/
│   ├── base.html
│   ├── dashboard.html
│   ├── forgot_password.html
│   └── reset_password.html
│
├── static/
│   ├── style.css
│   ├── script.js
│   └── bg.jpg
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/flask-auth-system.git
cd flask-auth-system
```

### 2. Create virtual environment

```
python -m venv venv
```

Activate environment:

**Windows**

```
venv\Scripts\activate
```

**Mac/Linux**

```
source venv/bin/activate
```

---

### 3. Install dependencies

```
pip install -r requirements.txt
```

---

### 4. Run the application

```
python app.py
```

Open in browser:

```
http://127.0.0.1:5000
```

---

## 🔒 Security Features

* Password hashing using Werkzeug
* Secure session handling
* Token-based password reset
* Form validation
* Protected routes with Flask-Login

---

## 📱 Responsive Design

Fully optimized for:

* Desktop
* Tablet
* Mobile devices

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full authentication workflow
* Flask backend integration
* Secure password management
* Responsive frontend development
* Session and user management

---

## 🚀 Future Improvements

* Email-based password reset (SMTP integration)
* Email verification system
* Remember Me functionality
* User profile management
* PostgreSQL database integration
* Deployment (Render / Railway / Vercel)

---

## 📊 Vercel Web Analytics

This project is integrated with Vercel Web Analytics to track page views and visitor data. The analytics script is automatically loaded on all pages when deployed to Vercel.

### How it works

* Analytics tracking is enabled via the Vercel Insights script loaded in all HTML templates
* Once deployed to Vercel, visit your project's **Analytics** tab to view data
* No additional configuration needed - analytics automatically track page views

### Enabling Analytics on Vercel

1. Deploy your app to Vercel
2. Go to your [Vercel dashboard](https://vercel.com/dashboard)
3. Select your project and click the **Analytics** tab
4. Click **Enable** to start tracking visitors

For more information, visit the [Vercel Analytics documentation](https://vercel.com/docs/analytics).

---

## 👨‍💻 Author

**Rupesh Patil**

* GitHub: https://github.com/Groot0204
* Portfolio: (Add your portfolio link here)

---

## 📜 License

This project is open-source and available under the MIT License.

---

⭐ If you found this project helpful, please consider giving it a star!