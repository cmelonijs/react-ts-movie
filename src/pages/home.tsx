import { useEffect } from "react";
import { useState } from "react";
import Section from "../components/Section";
import Slider from "../components/slider/slider";
import TrendingHero from "../components/trending-hero";
import { Film } from "../interfaces";

const Home = () => {
  const [trendings, setTrendings] = useState<Film[]>([]);

  const fetchTrendings = () => {
    const list: Film[] = [];

    for (let i = 0; i < 6; i++) {
      list.push({
        id: Math.random() * 100,
        title:
          "Mamma ho perso l'aereoMamma ho perso l'aereoMamma ho perso l'aereoMamma ho perso l'aereo",
        description: "Mamma ho perso l'aereoMamma ho perso l'aereoMamma ho perso l'aereoMamma ho perso l'aereo",
        coverPath: "",
        genreIds: [1, 2, 3, 4, 5],
        posterPath: "",
        seansons: [],
      });
    }

    setTrendings(list);
  };

  useEffect(() => {
    fetchTrendings();
  }, []);
  
  return (
  <>
    <Section className="py-0">
      <Slider className="slick-hero " autoplay={true} slidesToShow={1} slidesToScroll={1}>
        {trendings.map((film) => (
          <TrendingHero key={film.id} film={film} />
        ))}
      </Slider>
    </Section>
  </>
  );
};

export default Home;
