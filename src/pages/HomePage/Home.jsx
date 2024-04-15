import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full">
      home long content
      {
        // indicates very long content
        Array.from(
          {
            length: 100,
          },
          (_, index) => (
            <p key={index}>
              {index % 20 === 0 && index ? "more" : "..."}
              <br />
            </p>
          )
        )
      }
    </div>
  );
};

export default Home;
