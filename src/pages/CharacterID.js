import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterID = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterID } = useParams();

  useEffect(() => {
    try {
      const fetchCharacterID = async () => {
        const response = await axios.get(
          `https://jasmine-marvel-backend.herokuapp.com/character/${characterID}`
        );
        setData(response.data);
        setIsLoading(false);
      };
      fetchCharacterID();
    } catch (error) {
      console.log(error.message);
    }
  }, [characterID]);

  return isLoading === true ? (
    <p>En cours de chargement</p>
  ) : (
    <div>
      <p>hello</p>
      <img src={data.thumbnail.path + "." + data.thumbnail.extension} alt="" />
      <p>{data.name}</p>
    </div>
  );
};
export default CharacterID;
