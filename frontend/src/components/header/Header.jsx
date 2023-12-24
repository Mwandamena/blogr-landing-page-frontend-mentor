import Navbar from "./navbar/Navbar";
import Container from "../common/Container";
import Hero from "./hero/Hero";

// images
import background from "../../assets/images/bg-pattern-intro-desktop.svg";

function Header() {
  // backgorund style
  const styles = {
    backgroundImage: `url(${background})`,
  };

  return (
    <header className="relative w-full pt-8 pb-40 m-0  text-[--white] rounded-bl-[6rem] bg-no-repeat">
      <Container>
        <div>
          <Navbar />
          <Hero />
        </div>
      </Container>
    </header>
  );
}

export default Header;
