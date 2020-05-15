import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-sm mx-auto flex flex-col min-h-screen font-sans text-white font-thin">
        <Header />
  
        <main className="flex-1 w-full px-2">
          {children}
        </main>
  
        <footer className="px-8 pb-16">
          <nav className="text-sm">
            <p className="text-white">
              Made with ❤️ by{` `}
              <a
                className="font-semibold no-underline"
                href="https://seniuk.io"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Sascha Seniuk
              </a>
            </p>
          </nav>
          <div className="text-sm">
            <p className="text-white">
              Powered 🏭 by{` `}
              <a
                className="font-semibold no-underline"
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                GatsbyJS
              </a>
              {` , `}
              <a
                className="font-semibold text-white no-underline"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Tailwind CSS
              </a>
              {` and `}
              <a
                className="font-semibold text-white no-underline"
                href="https://www.netlify.com/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Netlify
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
    
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
