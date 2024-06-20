import navStyles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <div />

      <img className={navStyles.logo} src="src\images\logo-white.png" alt="logo"></img>

      <ul className={navStyles.menuOptions}>
        <li>Home</li>
        <li>Prevention</li>
        <li>Quarentine</li>
        <li>Page</li>
        <li>About</li>
        <li>Help</li>
        <input type="button" value="Submit" />
      </ul>
    </nav>
  );
};

export default Navbar;
