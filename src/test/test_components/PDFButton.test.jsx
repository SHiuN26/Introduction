import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PDFButton from "@/components/PDFButton";
import { GlobalContext } from "@/contexts/GlobalContext";
import { TranslateContext } from "@/contexts/TranslateContext";
import { vi } from "vitest";

describe("PDFButton Component", () => {
  const mockGlobalContextValue = {
    deviceType: "LapTop", // or 'Mobile'
  };

  const mockTranslateContextValue = {
    lang: "en", // or 'zh_TW'
    translate: vi.fn((key) => key), // mock translate function
  };

  const renderComponent = () => {
    render(
      <GlobalContext.Provider value={mockGlobalContextValue}>
        <TranslateContext.Provider value={mockTranslateContextValue}>
          <PDFButton />
        </TranslateContext.Provider>
      </GlobalContext.Provider>
    );
  };

  test("renders PDFButton component", () => {
    renderComponent();
    // 檢查列印圖案是否有顯示 if the PrinterOutlined icon is in the document
    const iconElement = screen.getByRole("img", { class: /anticon-printer/ });
    expect(iconElement).toBeInTheDocument();
  });

  // test("button is initially enabled", () => {
  //   renderComponent();
  //   const button = screen.getByRole("button");
  //   expect(button).toBeEnabled();
  // });

  // test("handlePrint is called when button is clicked", () => {
  //   const handlePrint = vi.fn();
  //   vi.mock("react-to-print", () => ({
  //     ...vi.requireActual("react-to-print"),
  //     useReactToPrint: () => handlePrint,
  //   }));

  //   renderComponent();
  //   const button = screen.getByRole("button");
  //   fireEvent.click(button);
  //   expect(handlePrint).toHaveBeenCalled();
  // });

  // test("button is disabled during printing", async () => {
  //   const handlePrint = vi.fn();
  //   vi.mock("react-to-print", () => ({
  //     ...vi.requireActual("react-to-print"),
  //     useReactToPrint: () => ({
  //       content: () => document.createElement("div"),
  //       onBeforeGetContent: () => {
  //         return new Promise((resolve) => {
  //           setTimeout(() => resolve(), 1000);
  //         });
  //       },
  //     }),
  //   }));

  //   renderComponent();
  //   const button = screen.getByRole("button");
  //   fireEvent.click(button);
  //   expect(button).toBeDisabled();
  //   // Add additional checks here to ensure button is re-enabled after printing
  // });

  // test("button is re-enabled after printing", async () => {
  //   const handlePrint = vi.fn();
  //   vi.mock("react-to-print", () => ({
  //     ...vi.requireActual("react-to-print"),
  //     useReactToPrint: () => ({
  //       content: () => document.createElement("div"),
  //       onBeforeGetContent: () => {
  //         return new Promise((resolve) => {
  //           setTimeout(() => resolve(), 1000);
  //         });
  //       },
  //     }),
  //   }));

  //   renderComponent();
  //   const button = screen.getByRole("button");
  //   fireEvent.click(button);
  //   expect(button).toBeDisabled();
  //   await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for printing to finish
  //   expect(button).toBeEnabled();
  // });

  // test("renders correctly on mobile devices", () => {
  //   mockContextValue.deviceType = "Mobile";
  //   renderComponent();
  //   expect(screen.queryByText(/PDF/i)).toBeNull(); // No text on mobile
  //   expect(screen.getByRole("button")).toBeInTheDocument();
  // });
});
