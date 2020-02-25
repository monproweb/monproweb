import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { RMWCProvider } from "@rmwc/provider";
import { ThemeProvider } from "@rmwc/theme";

// This example disables ripples globally by default
ReactDOM.render(
  <RMWCProvider
    // Globally disable ripples
    ripple={false}
    // Global options for icons
    // Takes the same options as the icon component
    icon={{
      basename: "material-icons"
    }}
    // Global options for typography
    // allows mapping of a defaultTag or specific classes
    // See the Typography docs for more info
    typography={{
      /** Make all Typography components default to <div>  */
      defaultTag: "div",
      /** Make headline5 <h5>  */
      headline1: "h1",
      headline2: "h1",
      headline3: "h2",
      headline4: "h3",
      headline5: "h4",
      headline6: "h5",
      /** Make body2 <p>  */
      body1: "p",
      body2: "p"
    }}
    // Global options for tooltips
    // Takes most of the options for tooltips
    // See the Tooltip docs for more info
    tooltip={{
      align: "right",
      activateOn: "hover",
      showArrow: true,
      leaveDelay: 500,
      enterDelay: 0
    }}
  >
    <ThemeProvider
      options={{
        primary: "#24aee9",
        secondary: "#e539ff",
        error: "#b00020",
        background: "#212121",
        surface: "#37474F",
        onPrimary: "rgba(255,255,255,.87)",
        onSecondary: "rgba(0,0,0,0.87)",
        onSurface: "rgba(255,255,255,.87)",
        onError: "#fff",
        textPrimaryOnBackground: "rgba(255, 255, 255, 1)",
        textSecondaryOnBackground: "rgba(255, 255, 255, 0.7)",
        textHintOnBackground: "rgba(255, 255, 255, 0.5)",
        textDisabledOnBackground: "rgba(255, 255, 255, 0.5)",
        textIconOnBackground: "rgba(255, 255, 255, 0.5)",
        textPrimaryOnLight: "rgba(0, 0, 0, 0.87)",
        textSecondaryOnLight: "rgba(0, 0, 0, 0.54)",
        textHintOnLight: "rgba(0, 0, 0, 0.38)",
        textDisabledOnLight: "rgba(0, 0, 0, 0.38)",
        textIconOnLight: "rgba(0, 0, 0, 0.38)",
        textPrimaryOnDark: "white",
        textSecondaryOnDark: "rgba(255, 255, 255, 0.7)",
        textHintOnDark: "rgba(255, 255, 255, 0.5)",
        textDisabledOnDark: "rgba(255, 255, 255, 0.5)",
        textIconOnDark: "rgba(255, 255, 255, 0.5)"
      }}
    >
      <App />
    </ThemeProvider>
  </RMWCProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
