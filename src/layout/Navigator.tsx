import { LeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { getSurahs } from "../provider/SurahProvider";
import "./navigator.style.scss";

function Navigator() {
  const { ayatAudio } = getSurahs();
  return (
    <div className="navbar">
      <Link to="/">
        <LeftOutlined />
      </Link>
      <audio {...ayatAudio} controls></audio>
    </div>
  );
}

export default Navigator;
