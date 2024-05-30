import React, { useContext, forwardRef } from "react";
import { Row, Col, Divider, Avatar, Typography } from "antd";
import dog from "@/asset/img/dog.jpg";
import WorkTimeLine from "./WorkTimeLine";
import GithubIcon from "@/components/GithubIcon";
import { GlobalContext } from "@/contexts/GlobalContext";

const Home = forwardRef((props, ref) => {
  const { Title, Paragraph } = Typography;
  const { deviceType } = useContext(GlobalContext);
  return (
    <div ref={ref} className="w-full h-full border font-Alfa first-page">
      <Row align="middle" justify="center">
        <Col span={24} className="flex justify-center items-center">
          <Avatar
            size={{
              xs: 48,
              sm: 64,
              md: 80,
              lg: 128,
              xl: 160,
              xxl: 200,
            }}
            src={dog}
          />
        </Col>
        <Col
          span={24}
          className="flex flex-col justify-center items-center p-4"
        >
          <div className="text-2xl">
            <Title>
              <span className="font-semibold">狗蛋大兵</span> Golden
            </Title>
          </div>
          <div className="w-[60vw]">
            <Paragraph className="text-base">
              在工智聯科技擔任前端工程師期間，我負責ERP和生產戰情系統的前端開發與維護，
              使用React技術實現了功能如Excel報表自動導出和ERP表單的PDF轉換。此外，
              我運用React-To-Print技術實現文檔列印，
              並通過I18N套件提供多語言支持。我也使用jQuery開發了公司的形象網站，
              確保了響應式和用戶友好的界面。
              在生產戰情系統的UI設計方面，我負責精準的切版，
              並利用Highcharts和WebSocket技術提升數據的視覺效果和即時性。
              我的技術能力包括製作兼容多種裝置的響應式網頁，保證了良好的用戶體驗。
            </Paragraph>
          </div>
        </Col>
        <Col span={24} className="flex justify-center items-center">
          <GithubIcon />
        </Col>
      </Row>
      <Row>
        <Col span={24} className="w-full">
          <Divider>
            <div className="text-2xl font-semibold font-Alfa">
              Work Experience
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
          <div className="font-Alfa w-full h-[8vh] bg-[#f7b552] rounded-lg flex justify-center items-center text-2xl color-[white] font-semibold">
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
          <div className="font-Alfa w-full h-[8vh] bg-[#f7b552] rounded-lg flex justify-center items-center text-2xl color-[white] font-semibold">
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
          <div className="font-Alfa w-full h-[8vh] bg-[#f7b552] rounded-lg flex justify-center items-center text-2xl color-[white] font-semibold">
            Git / GitHub
          </div>
          <div className="flex flex-col justify-start items-start pl-4">
            <div>熟悉 Git 指令</div>
            <div>使用 Sourcetree 版本控制介面</div>
            <div>了解 Git Flow 工作流程</div>
          </div>
        </Col>
      </Row>
    </div>
  );
});

export default Home;
