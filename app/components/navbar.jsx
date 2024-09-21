// @flow strict
import Link from "next/link";
import React from "react";
import { userData } from "@/data/user-data";
import ThemeContext from "../context/themeContext";

function Navbar() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <nav
      className={`bg-transparent hidden md:block ${
        theme ? "text-white" : "text-black"
      }`}
    >
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center opacity-0 md:opacity-100">
          <Link
            href="/"
            className={`${
              theme ? "text-primary-icon" : "text-purple-600"
            } text-3xl font-bold`}
          >
            @{userData.githubUser}
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <label
            className={`inline-flex items-center cursor-pointer px-4 rounded-md ${
              theme ? " bg-green-700" : "bg-green-300"
            }`}
          >
            <input
              type="checkbox"
              onClick={() => setTheme(!theme)}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary-icon dark:peer-focus:text-primary-icon rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-icon" />
            <span className="block px-2 py-2 text-sm transition-colors duration-300 hover:text-primary-icon">
              {theme ? "Light" : "Dark"}
            </span>
          </label>

          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-smtransition-colors duration-300 hover:text-primary-icon">
                Projects
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#stats"
            >
              <div className="text-smtransition-colors duration-300 hover:text-primary-icon">
                Stats
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#contributions"
            >
              <div className="text-smtransition-colors duration-300 hover:text-primary-icon">
                Contributions
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
