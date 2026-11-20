# Project Showcase

A simple portfolio project showcase app for a junior software developer. Built with React, Vite, and Tailwind CSS, it lets visitors browse, search, filter, add, and like projects.

## Features

- Add new projects with a title, technology, and description
- Search projects by title, technology, or description
- Filter projects by technology
- Like / unlike projects with a live like counter
- Responsive layout using Tailwind CSS

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
├── Components/   # Navigation, Header, ProjectForm, Project cards, Search, FilterButton
├── App.jsx       # App state and layout
├── data.js       # Sample projects and technology options
└── index.css     # Tailwind styles
```
