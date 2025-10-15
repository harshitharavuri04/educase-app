PopX Mobile App - React Version
This is a professional, mobile-optimized React application replicating the PopX design with seamless navigation, sliding pages, and responsive layout tailored for mobile screens.
Features
Single Page Application (SPA) architecture
Four main screens: Welcome, Login, Registration, Account Settings
Mobile-first responsive design
Bottom navigation bar with Home button and page arrows
Smooth slide transitions between screens
Registration with validation and full scroll support
Maintains state across navigation
Designed for screen width ~414px
Folder Structure
text
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
Node.js v14+ (test with Node 16+ recommended)
npm or yarn package manager
Setup & Installation
1. Clone the repository
bash
git clone https://github.com/yourusername/popx-react-app.git
cd popx-react-app
(Replace URL with your actual repository if applicable)
2. Install dependencies
bash
npm install
or
bash
yarn install
3. Start development server
bash
npm start
or
bash
yarn start
Open http://localhost:3000 in your browser. Use mobile view (device width ~414px) for testing.
Build & Deployment
To create an optimized production build:
bash
npm run build
This creates a build/ folder with static files.
To deploy on Render or similar hosts:
Use a static server (like serve) or host via static hosting.
Render deployment commands:
Root Directory: src
Build Command:
bash
npm install && npm run build
Start Command:
bash
serve -s build
(Ensure your environment has serve installed: npm install -g serve)
Deployment to Render
Push your code to GitHub repository
Create a new Web Service on Render
Set Root Directory to / or specify subfolder if changed
Use build command: npm install && npm run build
Use start command: serve -s build
Trigger deploy and access your app at assigned URL
