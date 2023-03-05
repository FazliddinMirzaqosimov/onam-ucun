import { Link } from "react-router-dom";
import { getSurahs } from "../provider/SurahProvider";
import "./surah.style.scss";

function Surahs() {
  const { surahs } = getSurahs();
  console.log(surahs);

  return (
    <div>
      {surahs.map((surah: any) => (
        <Link to={"/surah/" + surah.number}>
          <div className="surah">
            <span>{surah.number}</span> <p>{surah.englishName}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Surahs;
