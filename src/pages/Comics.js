import axios from "axios";
import { useState, useEffect } from "react";

// components import
import SearchBar from "../components/SearchBar";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // ⬇︎ stock le contenu de l'input du component search
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const fetchComics = async () => {
        const response = await axios.get(
          `https://jasmine-marvel-backend.herokuapp.com/comics?title=${search}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchComics();
    } catch (error) {
      console.log(error.message);
    }
  }, [search]);

  return isLoading === true ? (
    <div>Loading ... </div>
  ) : (
    <section>
      {/* ⬇︎ components SearchBar avec ses props*/}
      <SearchBar search={search} setSearch={setSearch} name="comics" />

      {data.results.map((comic, index) => {
        return (
          <div key={index}>
            {/* ⬇︎ path et extension séparé dans l'api */}
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt="comicPicture"
            />
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
          </div>
        );
      })}
    </section>
  );
};
export default Comics;
