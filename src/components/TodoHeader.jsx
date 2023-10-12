import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export default function TodoHeader() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">TODO</h1>
        <img className="header-moon header-icon" src={iconMoon} />
        <img className="header-sun header-icon unselected" src={iconSun} />
        <input
          className="header-switcher"
          aria-label="Toggle light mode"
          type="checkbox"
        />
      </header>
    </>
  );
}
