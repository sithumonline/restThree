import { Link } from "react-router-dom";
import logoLight from "/icons/favicon.svg";
import logoDark from "/icons/logo-dark.svg";

const Footer = (props) => {
  return (
    <div>
      <div className="px-8 sm:px-16 w-full min:h-32 border-t border-black/10 dark:border-white/5 flex items-center justify-center bg-white dark:bg-black dark:text-white">
        <div className="flex flex-col sm:flex-row py-8 justify-between w-full items-center gap-3 text-black dark:text-white">
          <img
            src={props.mode === "dark" ? logoLight : logoDark}
            width="32px"
          />
          <span className="text-lg">Copyright © 2022 Miyuru Gunarathna.</span>
          <Link
            to="/#"
            className="rounded-3xl border border-black dark:border-white px-3 py-1 uppercase hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
          >
            Back to Top
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
