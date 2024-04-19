import React from "react";
import { Timeline } from "antd";
const WorkTimeLine = () => {
  const workItems = [
    {
      children: (
        <div className="font-Alfa text-lg">
          <div>2022-04-11~2024-02-20</div>
          <div className="font-Noto">
            React 前端工程師-工智聯科技股份有限公司
          </div>
          {/* <div>工智聯科技股份有限公司</div> */}
          <div>Technical testing 2</div>
        </div>
      ),
    },
    {
      children: (
        <div className=" text-lg">
          <div>2015-09-01</div>
          <div className="font-Alfa">Technical testing 1</div>
          <div>Technical testing 2</div>
          <div>Technical testing 3 2015-09-01</div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Timeline className="w-full" items={workItems} mode={"left"} />
    </>
  );
};

export default WorkTimeLine;
