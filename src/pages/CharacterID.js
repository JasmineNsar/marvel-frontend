import "./characterID.css";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterID = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // ⬇︎ passer par comics/id et non pas par character/id pour afficher les comics correspondant au perso car les infos de l'api sont les mêmes + les comics dans comics/id

  useEffect(() => {
    try {
      const fetchCharacterComics = async (req, res) => {
        const response = await axios.get(
          `https://jasmine-marvel-backend.herokuapp.com/comics/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      };
      fetchCharacterComics();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  return isLoading === true ? (
    <p>En cours de chargement</p>
  ) : (
    <section className="sectionCharID">
      {/* ⬇︎ div de mon perso avec photo + nom + description; dans l'api la photo est au tout début et les infos sont à la toute fin */}
      <div className="charIdDiv">
        <div>
          <img
            src={data.thumbnail.path + "." + data.thumbnail.extension}
            alt="character"
          />
        </div>

        <div className="charNameDes">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
      </div>

      {/* ⬇︎ div du map des comics lié au perso avec photo + title + description; dans l'api le tableau comics commence à la ligne 9 */}
      <div className="charComicsDiv">
        {data.comics.map((characterComic, index) => {
          return (
            <div className="comicImg" key={index}>
              <img
                src={
                  characterComic.thumbnail.path +
                  "." +
                  characterComic.thumbnail.extension
                }
                alt="comic"
              />
              <div className="charComicsInfo">
                <h1>{characterComic.title}</h1>
                <p>{characterComic.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default CharacterID;
