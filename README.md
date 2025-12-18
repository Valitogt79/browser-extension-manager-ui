# Browser Extension Manager UI

This project is a responsive user interface for managing a list of browser extensions, built as a solution to a challenge from Frontend Mentor. The application allows users to view, filter, and interact with a collection of extensions loaded from a local data source.

## Features

- **Dynamic Extension List:** Displays a grid of extensions from a local JSON data file.
- **Status Filtering:** Users can filter the list to show "All", "Active", or "Inactive" extensions.
- **Client-Side Updates:** Extensions can be removed from the list or their active status can be toggled directly from the UI.
- **Dark/Light Theme:** Includes a theme switcher that toggles between a light and dark mode, with the user's preference saved in local storage.

## Built with

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A modern frontend build tool that provides a fast development experience.
- **CSS with Tailwind CSS utilities:** The styling is implemented using plain CSS, leveraging utility-first principles similar to Tailwind CSS for the class names.

## Key Learnings

This project provided an opportunity to practice and solidify core React concepts, including:

- **Component-Based Architecture:** The application is structured into reusable components for the header, filters, and extension cards, promoting modularity and maintainability.
- **State Management with Hooks:** State is managed using React Hooks (`useState` and `useEffect`) to handle filtering logic, theme changes, and client-side data modifications.
- **Props and State Lifting:** Data and state management functions are passed down from parent to child components, demonstrating the concept of lifting state up to a common ancestor.
- **Event Handling:** Implemented various event handlers for user interactions such as button clicks and toggles.
- **Local Data Handling:** The application fetches and processes data from a local `data.json` file, simulating how a real-world application might handle data from an API.
- **DOM Manipulation and Local Storage:** Utilized `localStorage` to persist the theme preference across sessions and directly manipulated the `documentElement` to apply theme classes.