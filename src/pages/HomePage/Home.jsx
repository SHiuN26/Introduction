import React from "react";
import { Row, Col, Divider } from "antd";
import dog from "@/asset/img/dog.jpg";
import WorkTimeLine from "./WorkTimeLine";
const Home = () => {
  return (
    <div className="w-full h-full border font-Alfa">
      <Row className="h-[30vh]" align="middle" justify="center">
        <Col
          span={6}
          className="h-full flex justify-center items-center w-[20vw]"
        >
          <img src={dog} className="rounded-full object-cover max-h-[25vh]" />
        </Col>
        <Col
          span={18}
          className="h-full flex flex-col justify-start items-start w-[80vw] p-4"
        >
          <div className="inline text-4xl font-semibold ">狗蛋大兵 Golden</div>
          <div>
            前端工作經驗約2年，曾於工智聯科技擔任前端工程師，負責前端網站維護及功能開發，使用React開發及維護ERP系統、生產戰情系統，使用使用jQuery開發公司形象網站，有API串接經驗
          </div>
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
          span={8}
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
          span={8}
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
          span={8}
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
};

export default Home;
