import { useState } from "react";
import { data } from "../data.js";
import { getEmoji } from "./GetEmoji.js";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
export const Section = ({ category }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="section">
      <div
        className="category"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className="category-title">
          <h2>{category}</h2>
          <span>{getEmoji(category)}</span>
        </div>
        <div className="category-button">
          {!show ? <HiOutlinePlusCircle /> : <HiOutlineMinusCircle />}
        </div>
      </div>
      {show
        ? data
            .filter((item) => item.category === category)
            .map((item) => {
              const { id, english, wolof } = item;
              return (
                <div key={id} className="phrase">
                  <h3 className="wolof-phrase">{wolof}</h3>
                  <h3 className="english-phrase">{english}</h3>
                </div>
              );
            })
        : ""}
    </div>
  );
};
