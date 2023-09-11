import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Weather from "./weater/weater";
// import "./store/dargah2/scc.css";
// import AddCartt from "./store/dargah2/addCart";
// import Buy2 from "./store/dargah2/BUY2";
// import Apps from "./store/dargah2/apps";
// import Apps from "./store/dargah2/apps";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
         <Weather/>

    {/* <Provider store={store}>  
          <Apps/>
        <AddCartt/>
        <Buy2/>
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
