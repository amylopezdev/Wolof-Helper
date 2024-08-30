export const Phrase = ({ category, wolof, english, informal, responses }) => {
  return (
    <div className="phrase">
      <div className="category-name">{category}</div>

      <div className="wolof-phrase">
        {wolof} {informal && <span className="formality">informal</span>}
      </div>
      <div className="english-phrase">{english}</div>

      {responses && <div className="responses-title">Response(s)</div>}

      {responses &&
        responses.map(({ wolof, english, informal }) => {
          return (
            <div className="response">
              <div className="wolof-phrase">
                {wolof}
                {informal && <span className="formality">informal</span>}
              </div>
              <div className="english-phrase">{english}</div>
            </div>
          );
        })}
    </div>
  );
};
