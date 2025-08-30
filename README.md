# React Notes App

A React-based notes-taking website that lets users create groups and add notes within them. Organize your thoughts efficiently by grouping related notes together.

## Features
- Create and manage groups
- Add multiple notes within groups
- Clean and simple user interface
- Persistent data storage (via browser localStorage) for no data loss on reload

## 🚀 Live Demo

Check out the live version of the app here:  
👉 [Live Link](https://react-note-taking-test.netlify.app/)

## Technologies Used
- **Frontend**: React 19
- **Routing**: React Router v7
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **UI Components**: Custom components with conditional styling
- **Notifications**: React Toastify

## Setup Instructions
1. Clone the repository:  
   `git clone https://github.com/Abjal-Momin/React-Notes-Test`
2. Install dependencies:  
   `cd React-Notes-Test && npm install`
3. Start development server:  
   `npm run dev`
4. Build for production:  
   `npm run build`

## File Structure
```
ReactModuleTest/
├── public/            # Static assets
├── src/               # Application source code
│   ├── assets/        # Images and icons
│   ├── components/    # React components
│   │   ├── CreateGroup.jsx
│   │   ├── GroupItem.jsx
│   │   ├── GroupList.jsx
│   │   ├── MainContent.jsx
│   │   ├── NotesApp.jsx
│   │   ├── NotesPanel.jsx
│   │   ├── Sidebar.jsx
│   │   └── WelcomePanel.jsx
│   ├── context/       # React context providers
│   │   ├── GroupListContext.jsx
│   │   └── GroupNotesContext.jsx
│   ├── styles/        # CSS Modules
│   │   ├── App.module.css
│   │   ├── CreateGroup.module.css
│   │   ├── GroupItem.module.css
│   │   ├── GroupList.module.css
│   │   ├── MainContent.module.css
│   │   ├── NotesApp.module.css
│   │   ├── NotesPanel.module.css
│   │   ├── Sidebar.module.css
│   │   └── WelcomePanel.module.css
│   ├── utils/         # Helper functions
│   │   └── helpers.jsx
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── .gitignore         # Files to ignore in version control
├── index.html         # Main HTML entry point
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation (this file)
```
