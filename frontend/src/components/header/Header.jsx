import Navbar from "./navbar/Navbar";
import Container from "../common/Container";
import Hero from "./hero/Hero";

function Header() {
  // backgorund style

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
