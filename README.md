📘 React Mini Application – Role Based Dashboard
📌 Overview

This project is a React-based mini dashboard application built as part of a technical assessment.
The application focuses on role-based sidebar rendering, protected routing, theme management, and state persistence, all driven by a single JSON configuration.

The goal was to create a clean, scalable, and maintainable frontend architecture, similar to real-world admin panels.

🚀 Features
✅ Role-Based Sidebar (JSON Driven)

Sidebar menus are rendered dynamically from a JSON configuration.

Only menu items with enabled: true are visible.

Supports parent → child menu structure.

No routes or menus are hardcoded.

✅ Protected Routing & Authorization

Implemented using react-router-dom.

Only routes enabled in JSON are accessible.

Direct access to disabled or unknown routes redirects to a 403 Forbidden page.

A reusable ProtectedRoute component handles authorization logic.

✅ Theme Management

4 predefined themes:

Blue

Green

Dark

Purple

Theme affects:

Sidebar background

Topbar background

Accent colors

Selected theme is persisted using localStorage.

Theme selection is available via a profile dropdown.

✅ Responsive Layout

Desktop: Sidebar always visible.

Mobile:

Sidebar collapses by default.

Hamburger menu toggles sidebar visibility.

Fully responsive using Tailwind CSS utilities.

✅ Pages

Each enabled route renders a simple welcome page.

Example:

Welcome to /crm/leads

🧱 Tech Stack

React (Vite)

react-router-dom

Tailwind CSS

Context API

JavaScript (ES6+)

📁 Project Structure
src/
├── config/
│   ├── permissions.config.js
│   └── themes.config.js
│
├── context/
│   └── ThemeContext.jsx
│
├── layout/
│   ├── AppLayout.jsx
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│   └── ProfileDropdown.jsx
│
├── pages/
│   ├── WelcomePage.jsx
│   └── Forbidden.jsx
│
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
│
├── utils/
│   └── permissionUtils.js
│
├── App.jsx
├── main.jsx
└── index.css

🔐 Authorization Logic

All permissions are derived from permissions.config.js.

A utility function checks if a route is enabled.

ProtectedRoute validates access before rendering a page.

Unauthorized access redirects to a 403 Forbidden page.

🎨 Theme Persistence Logic

Theme state is managed using React Context.

Selected theme is stored in localStorage.

On app reload, the theme is restored automatically.

📱 Responsiveness

Sidebar uses CSS transforms to slide in/out on mobile.

Layout adapts seamlessly across desktop, tablet, and mobile screens.

🧪 Testing Checklist

Sidebar renders only enabled menus ✔

Disabled routes redirect to 403 ✔

Theme changes reflect across UI ✔

Theme persists on page reload ✔

Mobile sidebar toggle works ✔

🌍 Deployment

Application can be deployed on Vercel or Render.

Built using Vite for fast builds and modern development experience.

🧠 Key Design Decisions

Single source of truth (JSON-driven UI & routing).

Separation of concerns (layout, routes, logic, config).

Minimal but meaningful UI polish to enhance UX without overengineering.

📎 Conclusion

This project demonstrates:

Strong React fundamentals

Clean component architecture

Real-world routing & authorization patterns

UI/UX awareness with responsive design

👤 Author

Kamal Khandal
React Developer Intern Candidate