import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../components/Container";
import { mergeClassName } from "../utils";
import {IoIosSearch} from 'react-icons/io'

const MENU_CLASS = `
    px-1.5
    py-1.5 
    hover:bg-primary
    rounded-md
`;

const MENU_CLASS_ACTIVE = `
    bg-primary
`;

const Header = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  const getMenuClass = (path: string) => {
    return path === pathname
      ? mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE)
      : mergeClassName(MENU_CLASS);
  };

  return (
    <div className="bg-header">
      <Container className="flex items-center flex-1 justify-between">
        <div className="flex items-center gap-6">
          {/* brand */}
          <h1 className="text-2xl font-semibold">
            <Link to="/">Netflix</Link>
          </h1>
          {/* menu */}
          <div className="flex items-center gap-1.5">
            <Link className={getMenuClass("/movies")} to="/movies">
              Movies
            </Link>
            <Link className={getMenuClass("/tv")} to="/tv">
              TV
            </Link>
          </div>
        </div>
        {/* search */}
        <div className="border-b-[1.5px] border-white flex items-center p-1 flex-[0.5] focus-within:border-primary">
          <input type="text" className="bg-transparent outline-0 flex-1" placeholder="Cerca ..." />
          <IoIosSearch size={18} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
