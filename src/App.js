import React, {useState} from "react";
import SectionOne from "./SectionOne";
import SectionSecond from "./SectionSecond";
import SectionThreth from "./SectionTreth";
import Footer from "./Footer";
import Modal from "./Modal";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme";
import ModalSucces from "./ModalSuccess";

function App() {
    const [flagForm, setFlag] = useState("hidden");
    const [flagFormSuccess, setFlagSucces] = useState("hidden");
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "dark"? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className="Container">
     <SectionOne switchTheme = {switchTheme} setFlag={setFlag}></SectionOne>
     <SectionSecond></SectionSecond>
     <SectionThreth></SectionThreth>
     <Footer></Footer>
     <Modal flag ={flagForm} func = {setFlag} funcSucccess = {setFlagSucces}></Modal>
     <ModalSucces flag ={flagFormSuccess} func = {setFlagSucces}></ModalSucces>
    </div>
    </ThemeProvider>
  );
}

export default App;
