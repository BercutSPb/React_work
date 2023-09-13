import React from "react";
import Header from "./components/Header";
import Image from "./components/image";
import logo from "./img/logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: "Введите логин",
      userData: "",
    };
    this.inputClick = this / this.inputClick.bind(this);
  }
  render() {
    return (
      <div>
        <Header title="Страница регистрации" name="" />
        <h1>Войдите или зарегистрируйтесь</h1>
        <h2>{this.state.helpText}</h2>
        <input
          placeholder={this.state.helpText}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
        />
        <input placeholder="Введите пароль" />
        <p>Логотип</p>
        <Image image={logo} />
      </div>
    );
  }

  inputClick() {
    this.setState({ helpText: "Ввод данных" });
    console.log("Clicked");
  }
  mouseOver() {
    console.log("Mouse Over");
  }
}
export default App;
