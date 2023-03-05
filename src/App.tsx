import { Spin } from "antd";
import { Route, Routes } from "react-router-dom";
import Navigator from "./layout/Navigator";
import Ayats from "./pages/Ayats";
import Surahs from "./pages/Surahs";
import { getSurahs } from "./provider/SurahProvider";

const App = (): JSX.Element => {
  const { loading } = getSurahs();
  console.log(loading);

  return (
    <div className="App">
      <Navigator />{" "}
      <Spin spinning={loading}>
        <div className="body-routes">
          <Routes>
            <Route path="/" element={<Surahs />} />
            <Route path="surah/:id" element={<Ayats />} />
          </Routes>
        </div>
      </Spin>
    </div>
  );
};

export default App;
