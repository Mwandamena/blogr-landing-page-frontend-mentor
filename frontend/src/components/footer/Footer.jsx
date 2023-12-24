// components
import Container from "../common/Container";

// images
import logo from "../../assets/images/logo.svg";

// constants
import { footerLinks } from "../../constants/footer";

function Footer() {
  return (
    <section className="w-full mt-56 rounded-tr-[6rem] bg-[--very-dark-black-blue]">
      <Container>
        <div className="py-16 text-[--white] flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* logo */}
          <div className="w-full flex items-center md:items-start justify-center md:justify-start">
            <img src={logo} alt="Blogr Logo" className="w-24" />
          </div>

          {/* footer links */}
          {footerLinks.map((link) => (
            <div
              className="mt-12 md:mt-0 w-full flex flex-col gap-2 text-center md:text-start"
              key={link.id}
            >
              <div className="font-[--fw-600] tracking-wide">
                <h4>{link.label}</h4>
              </div>
              <ul className="flex text-sm sm:text-lg flex-col gap-2 mt-6 text-[--grayish-blue]">
                {link.sublinks.map((link) => (
                  <ul key={link}>
                    <li>
                      <a href="#" className="hover:underline focus:underline">
                        {link}
                      </a>
                    </li>
                  </ul>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div class="mb-4 text-[--white] text-xs text-center">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="focus:underline hover:underline"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.github.com/Mwandamena"
            className="focus:underline hover:underline"
          >
            Kelvin Mwandamena
          </a>
          .
        </div>
      </Container>
    </section>
  );
}

export default Footer;
