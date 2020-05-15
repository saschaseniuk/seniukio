import { Link } from "gatsby";
import React from "react";
import seniukLogo from "../images/sascha_seniuk_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

function Header() {

  return (
    <header className="pt-12 px-8">
      <div className="mb-4 flex flex-row space-x-2">
        <a href="https://www.facebook.com/sascha.seniuk/">
          <FontAwesomeIcon className="text-2xl text-white" icon={["fab", "facebook-square"]}/>
        </a>
        <a href="https://www.instagram.com/sascha.seniuk">
          <FontAwesomeIcon className="text-2xl text-white" icon={["fab", "instagram-square"]}/>
        </a>
        <a href="https://twitter.com/seniuk_">
          <FontAwesomeIcon className="text-2xl text-white" icon={["fab", "twitter-square"]}/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=4915252410129&text=Howdy!">
          <FontAwesomeIcon className="text-2xl text-white" icon={["fab", "whatsapp-square"]}/>
        </a>
      </div>
      <div>
        <Link to="/">
          <img
            alt="Sascha Seniuk Logo"
            className="block w-full mx-auto mb-8"
            src={seniukLogo}
          />
        </Link>
      </div>
      <div className="text-xl mb-8">
        <p>
          Mein Name ist Sascha Seniuk. Für mich ist die Digitalisierung die Emanzipation des Kunden. Und so gehört meine Liebe nicht nur meiner Tochter, sondern auch modernen Technologien, die unsere Gesellschaft und unsere Wirtschaft voranbringen.
        </p>
      </div>
      <nav className="flex justify-between text-green-400 text-xl mb-10">
        {[
          {
            route: `/about`,
            title: `Blog`,
          },
          {
            route: `/contact`,
            title: `Vorträge`,
          },
          {
            route: `/contact`,
            title: `Projekte`,
          },
          {
            route: `/contact`,
            title: `Kontakt`,
          },
        ].map((link) => (
          <Link
            className="hover:text-red-500 hover:underline"
            key={link.title}
            to={link.route}
          >
            <span className="">
            {link.title}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
