import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import Resume from "@/pages/ResumePage/Resume";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import Todo from "@/pages/TodoTs/Todo";
import TodoRedux from "@/pages/TodoRedux/TodoRedux";
import { Provider } from "react-redux";
import store from "@/store/store";

import { useLocation } from "react-router-dom";

import { useEffect } from "react";
const MyRoute = () => {
  let location = useLocation();
  useEffect(() => {
    console.log("location =>", location.pathname);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Resume />} />
        {/* <Route path="/todo" element={<Todo />} />  */}
        <Route
          path="/todo"
          element={
            <Provider store={store}>
              <TodoRedux />
            </Provider>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MyRoute;
