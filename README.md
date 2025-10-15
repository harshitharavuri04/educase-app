PopX Mobile App - React Version
================================

This is a professional, mobile-optimized React application replicating the PopX design with seamless navigation, sliding pages, and responsive layout tailored for mobile screens.

Features
--------
- Single Page Application (SPA) architecture
- Four main screens: Welcome, Login, Registration, Account Settings
- Mobile-first responsive design
- Bottom navigation bar with Home button and page arrows
- Smooth slide transitions between screens
- Registration with validation and full scroll support
- Maintains state across navigation
- Designed for screen width ~414px

Folder Structure
----------------
popx-react-app/                  # Root project folder
├── package.json                # Dependencies and scripts
├── public/
│   └── index.html              # HTML template
└── src/
    ├── index.js                # React entry point
    ├── App.js                  # Main app component managing screens
    ├── components/             # All screen components
    │   ├── WelcomeScreen.js
    │   ├── LoginScreen.js
    │   ├── RegisterScreen.js
    │   ├── AccountScreen.js
    │   └── NavigationBar.js
    └── styles/                 # All CSS files
        ├── global.css
        ├── App.css
        ├── WelcomeScreen.css
        ├── LoginScreen.css
        ├── RegisterScreen.css
        ├── AccountScreen.css
        └── NavigationBar.css

Prerequisites
-------------
- Node.js v14+ (Node 16+ recommended)
- npm or yarn package manager

Setup & Installation
---------------------
1. Clone the repository
   git clone https://github.com/yourusername/popx-react-app.git
   cd popx-react-app

2. Install dependencies
   npm install
   or
   yarn install

3. Start development server
   npm start
   or
   yarn start

4. Open http://localhost:3000 in your browser. Use mobile view (device width ~414px) for testing.

Build & Deployment
-------------------
To create an optimized production build:
   npm run build

This creates a build/ folder with static files.

Render Deployment
-----------------
1. Push your code to GitHub repository.
2. Create a new Web Service on Render.
3. Set Root Directory to / or specify subfolder if changed.
4. Use build command: npm install && npm run build
5. Use start command: serve -s build
6. Trigger deploy and access your app at assigned URL.

Render Deployment Commands
--------------------------
Root Directory: /
Build Command:
   npm install && npm run build
Start Command:
   serve -s build

(Ensure your environment has serve installed: npm install -g serve)

Tech Stack
----------
- React.js
- CSS (Responsive Mobile UI)
- React State Management
- Render Hosting (Deployment)
