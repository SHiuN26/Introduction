import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LangSelect from "@/components/LangSelect";
import { TranslateContext } from "@/contexts/TranslateContext";
import { describe, expect } from "vitest";

describe("LangSelect Component", () => {
  const mockTranslateContextValue = {
    lang: "zh_TW", // or 'zh_TW'
    setLang: vi.fn(),
    translate: vi.fn((key) => key), // mock translate function
  };
  it("should render LangSelect component and handle language change", () => {
    render(
      <TranslateContext.Provider value={mockTranslateContextValue}>
        <LangSelect />
      </TranslateContext.Provider>
    );

    const combobox = screen.getByRole("combobox");

    const zhOption = screen.getByText("繁體中文");
    expect(zhOption).toBeInTheDocument();

    // 模擬使用者點擊下拉選單
    fireEvent.mouseDown(combobox);

    const enOption = screen.getByText("English");
    expect(enOption).toBeInTheDocument();
  });
});
