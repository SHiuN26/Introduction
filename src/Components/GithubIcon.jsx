import React from "react";
import githubIcon from "@/asset/icon/githubIcon.svg";

const GithubIcon = () => {
  return (
    <a
      href="https://github.com/SHiuN26"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={githubIcon}
        alt="GitHub"
        style={{ width: "25px", height: "25px" }}
      />
    </a>
  );
};

export default GithubIcon;
