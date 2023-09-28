import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>
      <div>THE BLUE PRINT COLLECTIVE</div>
    </div>
  );
};

export default Header;
