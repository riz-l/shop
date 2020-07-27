// Import: Dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// Import: Styling
import "./index.css";

// Import: Component
import Header from "./components/Header/Header.component";
import HomePage from "./pages/HomePage/HomePage.component";

// Component: App
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

// Export: App
export default App;
