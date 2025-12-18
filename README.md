# React Mini Dashboard Application

This project is a small React dashboard application built as part of a technical assessment.  
The focus of the assignment is on **role-based sidebar rendering**, **protected routes**, and **theme persistence**, rather than heavy UI or backend integration.

The application is completely **configuration-driven**, similar to how real-world admin panels work.

---

## Features

### 1. Role-Based Sidebar
- Sidebar menus are rendered dynamically from a JSON configuration.
- Only menu items with `enabled: true` are shown.
- Supports parent → child menu structure.
- No routes or sidebar items are hardcoded.

---

### 2. Protected Routes
- Routing is handled using `react-router-dom`.
- Every route is wrapped inside a reusable `ProtectedRoute` component.
- Direct URL access to disabled or unknown routes is blocked.
- Unauthorized access redirects the user to a **403 Forbidden** page.

Example:
- `/crm/leads` → accessible
- `/crm/reports` → blocked (403)

---

### 3. Theme Management
- Multiple predefined themes (Blue, Green, Dark, Purple).
- Theme affects:
  - Sidebar background
  - Topbar background
  - Accent colors
- Selected theme is stored in `localStorage` and restored on page reload.
- Theme can be changed from the profile dropdown.

---

### 4. Responsive Layout
- Desktop:
  - Sidebar is always visible.
- Mobile:
  - Sidebar is hidden by default.
  - Hamburger menu toggles the sidebar.
- Layout adapts using Tailwind CSS responsive utilities.

---

### 5. Pages
- Each enabled route renders a simple welcome page.
- The page content reflects the current route.

Example:
Welcome to /crm/leads


---

## Tech Stack
- React (Vite)
- react-router-dom
- Tailwind CSS
- Context API
- JavaScript (ES6)

---

## Project Structure

src/
├── config/
│ ├── permissions.config.js
│ └── themes.config.js
│
├── context/
│ └── ThemeContext.jsx
│
├── layout/
│ ├── AppLayout.jsx
│ ├── Sidebar.jsx
│ ├── Topbar.jsx
│ └── ProfileDropdown.jsx
│
├── pages/
│ ├── WelcomePage.jsx
│ └── Forbidden.jsx
│
├── routes/
│ ├── AppRoutes.jsx
│ └── ProtectedRoute.jsx
│
├── utils/
│ └── permissionUtils.js
│
├── App.jsx
├── main.jsx
└── index.css


---

## Authorization Logic
- All permissions come from `permissions.config.js`.
- A utility function checks whether a route is enabled.
- `ProtectedRoute` uses this logic to allow or block access.
- This ensures routes are protected even when accessed directly via the URL.

---

## Theme Persistence
- Theme state is managed using React Context.
- The selected theme is saved in `localStorage`.
- On page refresh, the previously selected theme is restored automatically.

---

## Deployment Notes
- The application is deployed on Vercel.
- A rewrite configuration is used to support client-side routing.
- This ensures direct access to routes works correctly in production.

---

## Testing Summary
- Sidebar renders only enabled menu items
- Disabled routes show 403 Forbidden
- Theme changes reflect across the UI
- Theme persists after refresh
- Sidebar toggle works on mobile

---

## Conclusion
This project demonstrates:
- Clean React component structure
- Config-driven UI and routing
- Proper route protection
- State persistence
- Responsive layout handling

---

**Author:**  
Kamal Khandal  
React Developer Intern Candidate
