import { getSurahs, getSurahsActions } from "../provider/SurahProvider";

function Ayat({ ayat }: any) {
  const { setAyatAudio } = getSurahsActions();
  const { ayatAudio } = getSurahs();
  function handleClick() {
    console.log(1);

    setAyatAudio({ ...ayatAudio, src: ayat.audio });
    console.log(getSurahs().ayatAudio);
  }
  return (
    <div onClick={handleClick}>
      <hr />
      <br />
      <center>{ayat.numberInSurah}</center>
      <br />

      <center>
        <h1 style={{ fontSize: 50 }}>{ayat.text}</h1>
      </center>
      <br />
      <hr />
    </div>
  );
}

export default Ayat;
