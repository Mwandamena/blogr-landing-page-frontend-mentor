import logo from "../../../assets/images/logo.svg";

function Logo() {
  return (
    <div>
      <a href="#">
        <img src={logo} alt="Logo" className="w-24" />
      </a>
    </div>
  );
}

export default Logo;
