import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components import
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // ⬇︎ stock le contenu de l'input du component search
  const [search, setSearch] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://jasmine-marvel-backend.herokuapp.com/characters?name=${search}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [search]);

  return isLoading === true ? (
    <div>Loading ...</div>
  ) : (
    <section className="charactersSection">
      {/* ⬇︎ components SearchBar avec ses props*/}
      <SearchBar search={search} setSearch={setSearch} name="characters" />

      <div>
        {data.results.map((character, index) => {
          return (
            <div className="charactersDiv" key={index}>
              <Link to={`/character/${character._id}`}>
                {/* ⬇︎ path et extension séparé dans l'api */}
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
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
    </section>
  );
};

export default Home;
