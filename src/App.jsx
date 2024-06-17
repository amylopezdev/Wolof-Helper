import { data } from "./data.js";
import { Section } from "./components/Section.jsx";

const App = () => {
  const categories = [...new Set(data.map((item) => item.category))];
  return (
    <>
      <h1 className="title">Amy’s Wolof Helper 🇸🇳</h1>
      {categories.map((category, index) => {
        return <Section category={category} key={`${category}${index}`} />;
      })}
    </>
  );
};

export default App;
