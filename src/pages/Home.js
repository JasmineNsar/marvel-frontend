import "./home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components import
import SearchBar from "../components/SearchBar";

// pagination

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // ⬇︎ stock le contenu de l'input du component search
  const [search, setSearch] = useState("");

  // pagination
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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
    <section className="section">
      {/* ⬇︎ components SearchBar avec ses props*/}
      <div className="searchBar">
        <SearchBar search={search} setSearch={setSearch} name="characters" />
      </div>

      <div className="charactersContainer">
        {data.results.map((character, index) => {
          return (
            <div className="charDiv" key={index}>
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
              <div className="charInfo">
                <h1>{character.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
      {/* pagination */}
      <div>
        {pages.map((page, index) => {
          return <button>{page}</button>;
        })}
      </div>
    </section>
  );
};

export default Home;
