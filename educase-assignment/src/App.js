import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import AccountScreen from "./components/AccountScreen";
import Navigation from "./components/Navigation";
import "./styles/App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [slideDirection, setSlideDirection] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: false,
  });

  const screens = [
    { id: 1, name: "welcome", component: WelcomeScreen },
    { id: 2, name: "login", component: LoginScreen },
    { id: 3, name: "register", component: RegisterScreen },
    { id: 4, name: "account", component: AccountScreen },
  ];

  const navigateToScreen = (screenId, direction = "") => {
    setSlideDirection(direction);
    setTimeout(() => {
      setCurrentScreen(screenId);
      setSlideDirection("");
    }, 150);
  };

  const handleNext = () => {
    if (currentScreen < 4) {
      navigateToScreen(currentScreen + 1, "slide-left");
    }
  };

  const handlePrev = () => {
    if (currentScreen > 1) {
      navigateToScreen(currentScreen - 1, "slide-right");
    }
  };

  const handleHome = () => {
    navigateToScreen(1, "slide-right");
  };

  const handleFormSubmit = (data) => {
    setFormData({ ...formData, ...data });
    if (currentScreen === 2) {
      navigateToScreen(4, "slide-left");
    } else if (currentScreen === 3) {
      navigateToScreen(4, "slide-left");
    }
  };

  const handleCreateAccount = () => {
    navigateToScreen(3, "slide-left");
  };

  const handleLogin = () => {
    navigateToScreen(2, "slide-left");
  };

  const CurrentScreenComponent = screens.find(
    (screen) => screen.id === currentScreen
  )?.component;

  return (
    <div className="app">
      <div className={`screen-container ${slideDirection}`}>
        {CurrentScreenComponent && (
          <CurrentScreenComponent
            formData={formData}
            onFormSubmit={handleFormSubmit}
            onCreateAccount={handleCreateAccount}
            onLogin={handleLogin}
          />
        )}
      </div>
      <Navigation
        currentScreen={currentScreen}
        totalScreens={4}
        onNext={handleNext}
        onPrev={handlePrev}
        onHome={handleHome}
      />
    </div>
  );
}

export default App;
