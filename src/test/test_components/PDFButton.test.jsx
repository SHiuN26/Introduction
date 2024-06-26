import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PDFButton from "@/components/PDFButton";
import { GlobalContext } from "@/contexts/GlobalContext";
import { TranslateContext } from "@/contexts/TranslateContext";
import { expect, vi } from "vitest";

//react-to-print 沒有提供測試接口，所以沒辦法針對useReactToPrint中的方法測試

describe("PDFButton Component", () => {
  const mockGlobalContextValue = {
    deviceType: "Desktop", // or 'Mobile'
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

  // 檢查列印按鈕是否有顯示 if the PrinterOutlined icon is in the document
  test("renders PDFButton component", () => {
    renderComponent();
    const iconElement = screen.getByRole("img", { class: /anticon-printer/ });
    expect(iconElement).toBeInTheDocument();
  });

  // 確保簡歷內容有在html文件中被隱藏
  test("renders Resume component within PDFButton", () => {
    renderComponent();
    expect(screen.getByText(/Louis Lin/i)).toBeInTheDocument();
  });

  //確保列印按鈕是可點擊的
  test("button is initially enabled", () => {
    renderComponent();
    const button = screen.getByRole("button");
    expect(button).toBeEnabled();
  });
});
