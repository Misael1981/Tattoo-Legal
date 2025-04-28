import About from "./Components/About";
import HeaderDesktop from "./Components/HeaderDesktop";
import HeaderMobile from "./Components/HeaderMobile";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
