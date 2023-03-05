import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getSurahsActions } from "../provider/SurahProvider";
import Ayat from "../components/Ayat";

type AyatType = {
  text: string;
  numberInSurah: number;
};

function Ayats(): JSX.Element {
  const [ayats, setAyats] = useState<AyatType[]>([]);
  const { setLoading } = getSurahsActions();

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
      .then((res) => setAyats(res.data.data.ayahs))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <ul>
        {ayats.map((ayat: AyatType) => (
          <Ayat ayat={ayat} />
        ))}
      </ul>
    </div>
  );
}

export default Ayats;
