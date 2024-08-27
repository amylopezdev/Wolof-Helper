export const Phrase = ({ category, wolof, english, informal }) => {
  return (
    <div className="phrase">
      <div className="category-name">{category}</div>

      <div className="wolof-phrase">
        {wolof} {informal && <span className="formality">informal</span>}
      </div>
      <div className="english-phrase">{english}</div>
    </div>
  );
};
