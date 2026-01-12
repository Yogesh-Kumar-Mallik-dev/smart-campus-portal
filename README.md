# Smart Campus Portal

A modern, responsive college portal built with **React + Vite + Tailwind
CSS**.\
This project focuses on clean architecture, a scalable theme system, and
a smooth user experience across light and dark modes.

The goal is to build a real-world campus platform with:

-   Public-facing pages (Home, About, Admission, Hostel)
-   A consistent design system
-   A responsive layout with mobile navigation
-   Future expansion for student dashboards and internal tools

------------------------------------------------------------------------

## ✨ Features

-   ⚡ Fast setup with Vite
-   🎨 Custom design system using CSS variables
-   🌗 Light/Dark mode with zero duplication
-   🧭 Routing with React Router
-   🧩 Component system powered by shadcn/ui
-   📱 Responsive Navbar with slide-in mobile menu
-   🧠 Semantic utility classes (`bg-background`, `text-foreground`,
    etc.)

------------------------------------------------------------------------

## 🛠 Tech Stack

-   **React**
-   **Vite**
-   **Tailwind CSS (v3)**
-   **React Router**
-   **shadcn/ui**
-   **CSS Variables for Theming**

------------------------------------------------------------------------

## 🚀 Getting Started

Clone the repository and install dependencies:

``` bash
npm install
```

Run the development server:

``` bash
npm run dev
```

Open your browser at:

    http://localhost:5173

------------------------------------------------------------------------

## 🌗 Theme System

This project uses a custom theme architecture:

-   All colors and shadows are defined as **CSS variables**
-   `.dark` on `<html>` switches the entire theme
-   Tailwind utilities map directly to those variables
-   No `dark:` classes are used in JSX
-   Components automatically adapt to the current mode

Example usage:

``` jsx
<div className="bg-background text-text shadow-md">
  Card
</div>
```

Toggle dark mode by adding/removing the `dark` class on `<html>`.

------------------------------------------------------------------------

## 🧭 Routing Structure

The app uses a layout + outlet pattern:

    /
     ├─ PublicLayout
     │   ├─ Home
     │   ├─ About
     │   ├─ Admission
     │   └─ Hostel
     └─ NotFound

`Navbar` lives in the layout and remains consistent across pages.

------------------------------------------------------------------------

## 📌 Roadmap

-   [ ] Student authentication
-   [ ] Dashboard for logged-in users
-   [ ] Admission forms
-   [ ] Hostel management module
-   [ ] Admin panel
-   [ ] API integration

------------------------------------------------------------------------

## 👤 Author

Built and maintained by **Yogesh Kumar Mallik**\
Aiming to create real-world, production-grade web systems while learning
full-stack development and game development.

------------------------------------------------------------------------

## 📄 License

This project is currently for learning and internal use.\
License to be decided later.
