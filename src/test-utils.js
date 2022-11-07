import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { todoReducer } from "./redux/reducer/todo";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: todoReducer, preloadedState }),
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper });
}

export * from "@testing-library/react";

export { render };
