import { Cart, FlexContent, Footer, Hero, NavBar, Sales, Stories } from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

function App() {
  return (
    <div>
      <NavBar />
      <Cart/>
      <main className="flex flex-col pb-20 bg-gray-200 gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  );
}

export default App;
