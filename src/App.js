import { useEffect } from "react";
import "./App.css";

function App() {
  const telegram = window.Telegram.WebApp;

  const showButton = () => {
    telegram.MainButton.text = "Кнопка";
    telegram.MainButton.show();
  };

  useEffect(() => {
    telegram.ready();
  });

  return <button onClick={showButton}>Я кнопка</button>;
}

export default App;
