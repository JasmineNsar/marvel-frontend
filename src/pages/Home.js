import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://jasmine-marvel-backend.herokuapp.com/characters"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <section className="charactersSection">
      {data.results.map((character, index) => {
        return (
          <div className="charactersDiv">
            <Link to={`/character/${character._id}`}>
              {/* ⬇︎ path et extension séparé dans l'api */}
              <img
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt="characterPicture"
              />
            </Link>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Home;
