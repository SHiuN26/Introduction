import React, { useContext } from "react";
import { Select } from "antd";
import { TranslateContext } from "@/contexts/TranslateContext";

const LangSelect = () => {
  const { lang, setLang, translate } = useContext(TranslateContext);

  const handleLangChange = (value) => {
    setLang(value);
  };

  return (
    <div className="flex justify-center items-center w-full p-2">
      {translate("global.lang")} :{/* {translate("lang")} : */}
      <Select
        onChange={(e) => handleLangChange(e)}
        className="px-2"
        defaultValue={lang}
        options={[
          { value: "zh_TW", label: <span>繁體中文</span> },
          { value: "en", label: <span>English</span> },
        ]}
      />
    </div>
  );
};

export default LangSelect;
