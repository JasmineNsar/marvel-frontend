import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchComics = async () => {
        const response = await axios.get(
          "https://jasmine-marvel-backend.herokuapp.com/comics"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchComics();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      {data.results.map((comic, index) => {
        return (
          <div>
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
    </div>
  );
};
export default Comics;
