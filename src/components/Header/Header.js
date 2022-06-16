import "./Header.css";
import ModeIcon from "./ModeIcon";

const Header = () => {
  const switchModeHandler = () => {
    const bodyElem = document.body;
    console.log(bodyElem.classList);
    bodyElem.classList.toggle("dark_mode");
  };
  return (
    <header class="header">
      <h1 class="header__title">Where in the world?</h1>

      <nav class="switch-mode" onClick={switchModeHandler}>
        <ModeIcon />

        <h2 class="mode__title">Dark Mode</h2>
      </nav>
    </header>
  );
};

export default Header;
