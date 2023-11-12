import React from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="Страница регистрации" />
        <div>
          <LoginForm />
        </div>
      </div>
    );
  }
}
export default App;
