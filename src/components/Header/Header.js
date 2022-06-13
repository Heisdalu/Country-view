import "./Header.css";
import LightModeIcon from "../../assets/half-moon-svgrepo-com.svg";
import DarkModeIcon from "../../assets/dark-mode.svg";

const Header = () => {
  return (
    <header class='header'>
      <h1 class='header__title'>Where in the world?</h1>

      <nav class="switch-mode">
        <img src={LightModeIcon} class='light-mode' alt="Light mode icon" />
        <img src={DarkModeIcon} class='dark-mode' alt="Light mode icon" />

        <h2 class='mode__title'>Dark Mode</h2>
      </nav>
    </header>
  );
};

export default Header;
