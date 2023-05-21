import Faq from "./components/sections/faq";
import Features from "./components/sections/features/features";
import Header from "./components/sections/header/header";
import Navbar from "./components/navbar";
import Pricing from "./components/sections/pricing";
import Testimonila from "./components/sections/testimonila";
import Footer from "./components/sections/footer";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* sections */}
      <Header />
      <Features />
      <Pricing />
      <Testimonila />
      <Faq />
      <Footer/>
    </>
  );
}

export default App;
