import { Film } from '../interfaces';
import Image from './Image';

interface Props {
    film: Film
}

const Card = (props: Props) => {
    return (
        <div className="mx-3 my-1.5">
            <Image src="" className="h-[200px]"  />
            <div className="py-1.5">{props.film.title}</div>
        </div>
    )
}

export default Card;