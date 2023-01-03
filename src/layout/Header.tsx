import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const navigate = useNavigate();

  const [pathname, setPathname] = useState<string>("");
  const [keyword, setKeyword] = useState<any>("");
  const [isSearchFocus, setSearchFocus] = useState<boolean>(false);

  const searchRef = useRef<HTMLInputElement>(null);

  const [params, _] = useSearchParams();
  
  const pathnameRef = useRef('');

  const goToSearchPage = () => {
    if(keyword) {
      navigate(`/search?q=${keyword}`)
      setSearchFocus(false)
      searchRef.current?.blur()
    }
  }

  const initKeyword = () => {
    if(pathnameRef.current === '/search') {
      setKeyword(params.get('q'|| ''))
    } else {
      setKeyword('')
    }
  };

  const onWindowClick = () => {
    setSearchFocus(false);
    initKeyword();
  }
 
  useEffect(() => {
    setPathname(location.pathname);
    pathnameRef.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('click', () => onWindowClick())
  }, [])

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
          <input 
            onClick={e => {
              e.stopPropagation();
              setSearchFocus(true);
            }} 
            onKeyDown={e => e.key === "Enter" ? goToSearchPage() : ''} 
            onInput={e => setKeyword(e.currentTarget.value)} 
            value={keyword} 
            type="text" 
            className="bg-transparent outline-0 flex-1" 
            placeholder="Cerca ..." 
          />
          <IoIosSearch size={18} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
