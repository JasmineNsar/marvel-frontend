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
    <div>
      {data.results.map((character, index) => {
        return (
          <div>
            <Link to={`/character/${character._id}`}>
              {/* Comme dans Vinted, mettre un Link qui permet de récup l'id */}
              {/* recupérer l'id sur la page characterID */}
              {/* sur cette page (characterID), envoyer la requete vers la route du back */}

              {/* ⬇︎ path et extension séparé dans l'api */}
              <img
                className="character-picture"
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
    </div>
  );
};

export default Home;
