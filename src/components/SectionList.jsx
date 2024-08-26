import { data } from "../data.js";
import { Section } from "./Section.jsx";

export const SectionList = () => {
  const categories = [...new Set(data.map((item) => item.category))];
  return (
    <div>
      {categories.map((category, index) => {
        return <Section category={category} key={`${category}${index}`} />;
      })}
    </div>
  );
};
