import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { Film } from "../interfaces";
import Image from "../components/Image";

interface Props {
  keyword: string;
  goToSearchPage: Function;
}

const SearchResult = (props: Props) => {
  const [items, setItems] = useState<Film[]>([]);

  const fetch = () => {
    const list: Film[] = [];

    for (let i = 0; i <= 5; i++) {
      list.push({
        id: Math.random() * 100,
        title:
          "Mamma ho perso l'aereoMamma ho perso l'aereoMamma ho perso l'aereoMamma ho perso l'aereo",
        description: "",
        coverPath: "",
        genreIds: [1, 2, 3, 4, 5],
        posterPath: "",
        seansons: [],
      });
    }

    setItems(list);
  };

  useEffect(() => {
    fetch();
  }, [props.keyword]);

  return (
    <div className="absolute left-0 top-[48px] right-0 rounded-md overflow-hidden bg-header">
      {items.map((film, idx) => {
        return (
          <div
            key={idx}
            className="my-1 flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer"
          >
            <Image src="" className="h-[72px] min-w-[102px] rounded-md" />
            <div className="truncate px-3">
              <p className="truncate text-base">{film.title}</p>
              <ul className="flex flex-wrap gap-x-1.5 text-sm">
                {film.genreIds.map((genre, indx) => (
                  <li key={indx}>item {indx}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
