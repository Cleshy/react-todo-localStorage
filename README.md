# 📝 Your Daily Wins – React Todo App

A minimal and responsive Todo App built with React, using custom hooks and localStorage for persistent state.

## ✨ Features

- ✅ Add, remove, and complete todos
- 💾 Persistent storage via `localStorage`
- 🎯 Custom `useTodos` hook with `useReducer`
- 📦 Clean and scalable project structure
- 🎨 Styled with custom CSS (Tailwind-ready)

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Cleshy/react-todo-localStorage.git
cd your-daily-wins
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

### App will be available at http://localhost:5173

## 📁 Folder Structure

```bash
src/
├── components/      # UI components (TodoForm, TodoList, TodoItem)
├── hooks/           # Custom React hooks (useTodos, useLocalStorage)
├── utils/           # Utility functions (e.g. createTodo)
└── App.jsx          # Main app component
```

## 🧠 Custom Hooks

- useLocalStorage: Wraps localStorage with safe set/get methods.
- useTodos: Manages todos with useReducer and persists them using useLocalStorage.

## 🛠 Technologies Used

- React
- useReducer & useEffect
- Custom Hooks
- localStorage API
- Vite

## 📌 Todo

- Edit todos inline
- Add filtering (All / Active / Completed)
- Tailwind styling upgrade
