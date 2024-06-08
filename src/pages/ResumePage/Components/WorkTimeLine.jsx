import React, { useEffect } from "react";
import { Timeline, Space } from "antd";
import { useContext } from "react";
import { TranslateContext } from "@/contexts/TranslateContext";
import "@/pages/ResumePage/ResumePrint.css";

const WorkTimeLine = () => {
  const { lang, translate } = useContext(TranslateContext);

  const workItems = [
    {
      children: (
        <div className="font-Alfa text-xl">
          <div className="mb-2 font-bold underline">
            React {translate("global.fe")}
          </div>
          <div className="font-Noto mb-2">
            工智聯科技股份有限公司｜2022.04 ~ 2024.02
          </div>
          <Space
            direction="vertical"
            size="large"
            style={{
              display: "flex",
            }}
          >
            <div className="font-Noto pl-2">
              <div className="font-semibold">ERP 專案</div>
              <ul className="text-base list-disc pl-6">
                <li>ERP 表單功能開發、維護</li>
                <li>ERP 報表使用 ExcelJS 套件導出 Excel 報表</li>
                <li>使用 React-To-Print 將 ERP 表單匯出 PDF 檔案</li>
                <li>使用 React-To-Print 搭配點陣式印表機列印表單</li>
                <li>使用 I18N 套件進行多語言翻譯</li>
              </ul>
            </div>

            <div className="font-Noto pl-2">
              <div className="font-semibold">生產戰情專案</div>
              <ul className="text-base list-disc pl-6">
                <li>生產戰情系統功能維護開發</li>
                <li>根據設計師要求進行 UI 切版</li>
                <li>使用 Highcharts 圖表套件串接WebSocket</li>
                <li>使用 I18N 套件進行多語言翻譯</li>
              </ul>
            </div>

            <div className="font-Noto pl-2">
              <div className="font-semibold">公司形象網站</div>
              <ul className="text-base list-disc pl-6">
                <li>html、css、jQuery 製作 RWD 網頁</li>
              </ul>
            </div>
          </Space>
        </div>
      ),
    },
    {
      children: (
        <div className="font-Alfa text-xl page-break">
          <div className="mb-2 font-extrabold underline">
            {translate("global.it")}
          </div>
          <div className="font-Noto mb-2">
            長信環保科技股份有限公司｜2018.05 ~ 2021.02
          </div>
          <Space
            direction="vertical"
            size="large"
            style={{
              display: "flex",
            }}
          >
            <div className="font-Noto pl-2">
              <div className="font-semibold">ERP 系統導入</div>
              <ul className="text-base list-disc pl-6">
                <li>協調各部門配合ERP系統調整流程</li>
                <li>生管部門單據正確率提升至100%</li>
                <li>業務部門單據正確率提升至100% </li>
                <li>ERP 整合車牌辨識系統導入，節省 30% 人員單據輸入作業時間</li>
                <li>財會部配門合ERP數據製作可視化圖表、成本結構更清晰</li>
              </ul>
            </div>
          </Space>
        </div>
      ),
    },
  ];

  const workItems＿en = [
    {
      children: (
        <div className="font-Alfa text-xl">
          <div className="mb-2 font-bold underline">
            React {translate("global.fe")}
          </div>
          <div className="font-Noto mb-2">
            Smart Automation Technology Co., Ltd. | 2022.04 ~ 2024.02
          </div>
          <Space
            direction="vertical"
            size="large"
            style={{
              display: "flex",
            }}
          >
            <div className="font-Noto pl-2">
              <div className="font-semibold">ERP Project</div>
              <ul className="text-base list-disc pl-6">
                <li>Development and maintenance of ERP form functions</li>
                <li>Exporting Excel reports using the ExcelJS library</li>
                <li>Exporting ERP forms to PDF files using React-To-Print</li>
                <li>
                  Printing forms using React-To-Print with dot matrix printers
                </li>
                <li>
                  Implementing multilingual translation using the I18N library
                </li>
              </ul>
            </div>

            <div className="font-Noto pl-2">
              <div className="font-semibold">Production Battle Project</div>
              <ul className="text-base list-disc pl-6">
                <li>
                  Development and maintenance of production battle system
                  functions
                </li>
                <li>UI slicing according to designer requirements</li>
                <li>
                  Integrating Highcharts with WebSocket for data visualization
                </li>
                <li>
                  Implementing multilingual translation using the I18N library
                </li>
              </ul>
            </div>

            <div className="font-Noto pl-2">
              <div className="font-semibold">Company Image Website</div>
              <ul className="text-base list-disc pl-6">
                <li>Creating RWD pages using HTML, CSS, and jQuery</li>
              </ul>
            </div>
          </Space>
        </div>
      ),
    },
    {
      children: (
        <div className="font-Alfa text-xl page-break">
          <div className="mb-2 font-extrabold underline">
            {translate("global.it")}
          </div>
          <div className="font-Noto mb-2">
            Changxin Environmental Technology Co., Ltd. | 2018.05 ~ 2021.02
          </div>
          <Space
            direction="vertical"
            size="large"
            style={{
              display: "flex",
            }}
          >
            <div className="font-Noto pl-2">
              <div className="font-semibold">ERP System Implementation</div>
              <ul className="text-base list-disc pl-6">
                <li>
                  Coordinating departments to adjust processes for ERP system
                </li>
                <li>
                  Increased accuracy of production department documents to 100%
                </li>
                <li>
                  Increased accuracy of business department documents to 100%
                </li>
                <li>
                  Integrated license plate recognition system with ERP, saving
                  30% of personnel document input time
                </li>
                <li>
                  Finance department visualized data using ERP, making cost
                  structure clearer
                </li>
              </ul>
            </div>
          </Space>
        </div>
      ),
    },
  ];

  return (
    <>
      <Timeline
        className="w-full"
        items={lang === "zh_TW" ? workItems : workItems＿en}
        mode={"left"}
      />
    </>
  );
};

export default WorkTimeLine;
