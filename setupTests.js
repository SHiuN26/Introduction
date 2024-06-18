import "@testing-library/jest-dom";

// Mocking window.matchMedia
// 因為模擬測試的環境是在沒有瀏覽器的情況下進行的，所以要定義window.matchMedia，不然關於media query的測試會報錯
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
