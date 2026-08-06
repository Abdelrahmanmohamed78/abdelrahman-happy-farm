"use client";
import { Provider } from "react-redux";
import store from "./RTK/store";
import { ReactNode } from "react";

function SliceContainer({children}: {children: ReactNode}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default SliceContainer;