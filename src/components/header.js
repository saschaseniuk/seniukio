import { Link } from "gatsby";
import React from "react";
import seniukLogo from "../images/sascha_seniuk_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

function Header() {
  return (
    <header className="pt-8 px-8">
      <div className="mb-4 flex flex-row space-x-2">
        <a href="https://www.facebook.com/sascha.seniuk/">
          <FontAwesomeIcon
            className="text-2xl text-white"
            icon={["fab", "facebook-square"]}
            title="Besuch mich auf Facebook"
          />
        </a>
        <a href="https://www.instagram.com/sascha.seniuk">
          <FontAwesomeIcon
            className="text-2xl text-white"
            icon={["fab", "instagram-square"]}
            title="Besuch mich auf Instagram"
          />
        </a>
        <a href="https://twitter.com/seniuk_">
          <FontAwesomeIcon
            className="text-2xl text-white"
            icon={["fab", "twitter-square"]}
            title="Besuch mich auf Twitter"
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=4915252410129&text=Howdy!">
          <FontAwesomeIcon
            className="text-2xl text-white"
            icon={["fab", "whatsapp-square"]}
            title="Schreib mir bei WhatsApp"
          />
        </a>
      </div>
      <div>
        <Link to="/" title="Sascha Seniuk´s Logo">
          <img
            alt="Sascha Seniuk Logo"
            className="block w-full mx-auto mb-8"
            src={seniukLogo}
          />
        </Link>
      </div>
      <div className="text-xl mb-8">
        <p>
          Mein Name ist Sascha Seniuk. Für mich ist die Digitalisierung die
          Emanzipation des Kunden. Und so gehört meine Liebe nicht nur meiner
          Tochter, sondern auch modernen Technologien, die unsere Gesellschaft
          und unsere Wirtschaft voranbringen.
        </p>
      </div>
      <nav className="flex justify-between text-green-400 text-xl mb-10">
        {[
          {
            route: `/blog`,
            title: `Blog`,
            alt: `Hier gibt es alle Blog Artikel in der Übersicht`,
          },
          {
            route: `/kontakt`,
            title: `Vorträge`,
            alt: `Hier findest Du Vorträge, die ich bereits gehalten habe oder Interessierten anbiete`,
          },
          {
            route: `/kontakt`,
            title: `Projekte`,
            alt: `Ausgewählte Projekte die besonders erwähnenswert sind gibt es hier`,
          },
          {
            route: `/kontakt`,
            title: `Kontakt`,
            alt: `Kontakt, Impressum, Datenschutz. Was man halt so braucht`,
          },
        ].map((link) => (
          <Link
            className="hover:text-red-500 hover:underline"
            key={link.title}
            to={link.route}
            title={link.alt}
          >
            <span className="">{link.title}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
