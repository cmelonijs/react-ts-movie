import { Film } from "../interfaces";
import Image from './Image';
import {MdPlayCircleOutline} from 'react-icons/md'

interface Props {
    film: Film
}

const TrendingHero = (props: Props) => {
    return (
        <div className="h-[300px] relative flex justify-center">
            {/* BG image */}
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <Image src=""></Image>
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
                <p className="text-xl max-w-[50%] truncate">{props.film.title}</p>
                <p className="text-sm line-clamp-3">{props.film.description}</p>
                <button className="px-3 py-1.5 flex items-center gap-3">
                    <MdPlayCircleOutline size={18}></MdPlayCircleOutline>
                    <span>Play trailer</span>
                </button>
            </div>
        </div>
    )
}

export default TrendingHero;