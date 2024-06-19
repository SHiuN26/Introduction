import React, { useContext, forwardRef } from "react";
import { Row, Col, Divider, Avatar, Typography, Flex } from "antd";
import picture from "@/asset/img/picture.jpg";
import WorkTimeLine from "@/pages/ResumePage/Components/WorkTimeLine";
import GithubIcon from "@/components/GithubIcon";
import { GlobalContext } from "@/contexts/GlobalContext";
import { TranslateContext } from "@/contexts/TranslateContext";

const Resume = forwardRef((props, ref) => {
  const { Title, Paragraph } = Typography;
  const { deviceType } = useContext(GlobalContext);
  const { lang, translate } = useContext(TranslateContext);

  return (
    <div ref={ref} className="w-full h-full border font-Alfa first-page">
      <Row align="middle" justify="center">
        <Col span={24} className="flex justify-center items-center">
          <Avatar
            size={{
              xs: 150,
              sm: 150,
              md: 125,
              lg: 125,
              xl: 150,
              xxl: 175,
            }}
            src={picture}
          />
        </Col>
        <Col
          span={24}
          className="flex flex-col justify-center items-center p-4"
        >
          <div className="text-2xl">
            <Title>
              <span className="font-semibold font-Alfa">Louis Lin</span>
            </Title>
          </div>
          <div className="w-[60vw]">
            <Paragraph className="text-base text-justify">
              {lang === "zh_TW" ? (
                <>
                  在工智聯科技擔任前端工程師期間，我負責ERP和生產戰情系統的前端開發與維護，
                  使用React技術實現了功能如Excel報表自動導出和ERP表單的PDF轉換。此外，
                  我運用React-To-Print技術實現文檔列印，
                  並通過I18N套件提供多語言支持。我也使用jQuery開發了公司的形象網站，
                  確保了響應式和用戶友好的界面。
                  在生產戰情系統的UI設計方面，我負責精準的切版，
                  並利用Highcharts和WebSocket技術提升數據的視覺效果和即時性。
                  我的技術能力包括製作兼容多種裝置的響應式網頁，保證了良好的用戶體驗。
                </>
              ) : (
                <>
                  {/* During my tenure as a front-end engineer at Smart Automation
                  Technology, I was responsible for the front-end development
                  and maintenance of the ERP and production battle systems. I
                  utilized React technology to implement features such as
                  automatic export of Excel reports and PDF conversion of ERP
                  forms. Additionally, I used React-To-Print technology for
                  document printing and provided multi-language support through
                  the I18N package. I also developed the company's image website
                  using jQuery, ensuring a responsive and user-friendly
                  interface. In the UI design of the production battle system, I
                  was responsible for precise slicing and used Highcharts and
                  WebSocket technology to enhance the visual effect and
                  real-time data capabilities. My technical skills include
                  creating responsive web pages compatible with various devices,
                  ensuring a good user experience. */}
                  During my tenure as a front-end engineer at Smart Automation
                  Technology, I developed and maintained ERP and production
                  systems using React. I implemented features like Excel export,
                  PDF conversion, and multi-language support with React-To-Print
                  and I18N. I also built the company's responsive and
                  user-friendly website using jQuery. In the production system
                  UI, I performed precise slicing and utilized Highcharts and
                  WebSocket for real-time data visualization. My skills include
                  creating responsive web pages for various devices, ensuring a
                  superior user experience.
                </>
              )}
            </Paragraph>
          </div>
        </Col>
        <Col span={24} className="flex justify-center items-center">
          <Flex justify="space-around" gap="small" align="center">
            <GithubIcon />
            <a
              className="text-base font-semibold font-Alfa"
              href="mailto:justodme26@gmail.com"
              target="blank"
            >
              justodme26@gmail.com
            </a>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="w-full">
          <Divider>
            <div className="text-2xl font-Alfa font-black">
              {translate("global.experience")}
            </div>
          </Divider>
        </Col>
      </Row>

      <Row>
        <Col span={24} className="w-full flex justify-start items-center p-4">
          <WorkTimeLine />
        </Col>
      </Row>

      <Row
        className=""
        align="start"
        justify="center"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col
          // span={8}
          span={deviceType === "Mobile" ? 24 : 8}
          className="h-full flex flex-col justify-start items-start text-base"
        >
          <Divider className="flex justify-center items-center" />
          <div className="font-Alfa w-full h-[5vh] bg-[#f7b552] rounded-lg flex justify-center items-center text-2xl color-[white] font-semibold">
            Javascript
          </div>
          <div className="flex flex-col justify-start items-start pl-4">
            <div>React</div>
            <div>React Router Dom</div>
            <div>React Query</div>
            <div>React Testing Library</div>
            <div>Vite、Vitest</div>
            <div>I18n</div>
          </div>
        </Col>
        <Col
          // span={8}
          span={deviceType === "Mobile" ? 24 : 8}
          className="h-full flex flex-col justify-start items-start text-base"
        >
          <Divider className="flex justify-center items-center" />
          <div className="font-Alfa w-full h-[5vh] bg-[#f7b552] rounded-lg flex justify-center items-center text-2xl color-[white] font-semibold">
            Layout
          </div>
          <div className="flex flex-col justify-start items-start pl-4">
            <div>Antd UI</div>
            <div>Tailwind CSS</div>
          </div>
        </Col>
        <Col
          // span={8}
          span={deviceType === "Mobile" ? 24 : 8}
          className="h-full flex flex-col justify-start items-start text-base"
        >
          <Divider className="flex justify-center items-center" />
          <div className="font-Alfa w-full h-[5vh] bg-[#f7b552] rounded-lg flex justify-center items-center text-2xl color-[white] font-semibold">
            Git / GitHub
          </div>
          {lang === "zh_TW" ? (
            <div className="flex flex-col justify-start items-start pl-4">
              <div>熟悉 Git 指令</div>
              <div>使用 Sourcetree 版本控制介面</div>
              <div>了解 Git Flow 工作流程</div>
            </div>
          ) : (
            <div className="flex flex-col justify-start items-start pl-4">
              <div>Familiar with Git commands</div>
              <div>Using Sourcetree for version control</div>
              <div>Understanding Git Flow workflow</div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
});

export default Resume;
