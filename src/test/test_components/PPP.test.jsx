// import PPP from "@/test/test_components/PPP";
// import {
//   render,
//   screen,
//   fireEvent,
//   waitFor,
//   act,
// } from "@testing-library/react";
// import { expect } from "vitest";
// import React from "react";

// describe("PPP", () => {
//   test("renders PPP component", () => {
//     render(<PPP />);
//   });

//   it("should disable the button when clicked", () => {
//     const { getByText } = render(<PPP />);
//     const button = getByText("PPP");

//     fireEvent.click(button);

//     // Debugging: log the button's outer HTML to see its structure
//     console.log(button.outerHTML);

//     // The button should be disabled immediately after clicking
//     expect(button.closest("button")).toBeDisabled();
//   });

//   it("should enable the button after the async operation completes", async () => {
//     const { getByText } = render(<PPP />);
//     const button = getByText("PPP");

//     fireEvent.click(button);

//     // Wait for the button to be enabled again
//     await waitFor(
//       () => {
//         expect(button.closest("button")).not.toBeDisabled();
//       },
//       { timeout: 5000 }
//     ); // Allowing up to 5 seconds for the async operation to complete
//   });
// });

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PPP from "./PPP";

test("PPP button should be disabled while printing", async () => {
  render(<PPP />);

  const button = screen.getByRole("button", { name: "PPP" });

  // 初始狀態下按鈕應該是啟用的
  expect(button).not.toBeDisabled();

  // 點擊按鈕
  fireEvent.click(button);

  // 點擊後按鈕應該被禁用
  expect(button).toBeDisabled();

  // 等待非同步事件完成
  await waitFor(() => expect(button).not.toBeDisabled(), { timeout: 6000 });
});
