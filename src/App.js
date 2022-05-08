
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Container from "../src/Container";
import AppContext from "./components/AppContext/AppContext";







const App = () => {
  return (
    <BrowserRouter>
    <AppContext>
    <Header />
    <Container/>
    <Footer />
   </AppContext>
   </BrowserRouter>
    
  )
}

export default App;