import React, {useState} from "react";
import SectionOne from "./SectionOne";
import SectionSecond from "./SectionSecond";
import SectionThreth from "./SectionTreth";
import Footer from "./Footer";
import Modal from "./Modal";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";

function App() {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "dark"? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className="Container">
     <SectionOne switchTheme = {switchTheme}></SectionOne>
     <SectionSecond></SectionSecond>
     <SectionThreth></SectionThreth>
     <Footer></Footer>
     <Modal></Modal>
    </div>
    </ThemeProvider>
  );
}

export default App;
