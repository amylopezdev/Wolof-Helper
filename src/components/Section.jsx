import { useState } from "react";
import { data } from "../data.js";
import { getEmoji } from "./GetEmoji.js";
import { Phrase } from "./Phrase.jsx";
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
            .map((item, index) => {
              return <Phrase key={`${item.category}${index}`} {...item} />;
            })
        : ""}
    </div>
  );
};
