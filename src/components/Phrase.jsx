export const Phrase = ({ category, wolof, english }) => {
  return (
    <div className="phrase">
      <div className="category-name">{category}</div>
      <div className="wolof-phrase">{wolof}</div>
      <div className="english-phrase">{english}</div>
    </div>
  );
};
