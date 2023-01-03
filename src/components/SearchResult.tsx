import { stringify } from "querystring";
import { useState } from "react";
import { Film } from "../interfaces";
import Image from '../components/Image';

interface Props {
    keyword: string
    goToSearchPage: Function
}

const SearchResult = () => {
    const [items, setItems] = useState<Film[]>([]);
 
    const fetch = () => {
        const list: Film[] = [];

        for(let i = 0; i <= 0; i++) {
            list.push({
                id: Math.random() * 100,
                title: '',
                description: '',
                coverPath: '',
                genreIds: [],
                posterPath: '',
                seansons: []
            })
        }

        setItems(list);
    }

    return (
        <div className="absolute left-0 top-[48px] right-0 rounded-md overflow-hidden">
            {items.map(((film, idx) => {
                return (
                    <div key={idx} className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer">
                        <Image src="" className="h-[72px] w-[102px]" />
                        <div className="px-3">
                            <p className="text-base">{film.title}</p>
                            <ul className="flex flex-wrap gap-x-1.5 text-sm">
                                {film.genreIds.map((genre, indx) => (
                                    <li key={indx}>item {indx}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }))}
        </div> 
    )
}

export default SearchResult;