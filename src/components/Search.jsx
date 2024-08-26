import { useState } from "react";
import { data } from "../data.js";
import { SearchInput } from "./SearchInput.jsx";
import { SectionList } from "./SectionList.jsx";
import { Phrase } from "./Phrase.jsx";

export const Search = () => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredData = data.filter((item) => {
    if (searchField === "") return;
    return (
      item.english.toLowerCase().includes(searchField.toLowerCase()) ||
      item.wolof.toLowerCase().includes(searchField.toLowerCase()) ||
      item.category.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const clearButton = <button onClick={()=>{setSearchField("")}}>Clear Search</button>;

  return (
    <>
      <SearchInput handleChange={handleChange} searchField={searchField}/>

      {filteredData.length < 1 && searchField !== "" ? (
        <div className="results error">No results found {clearButton}</div>
      ) : filteredData.length > 1 ? (
        <div className="results">{filteredData.length} results found {clearButton}</div>
      ) : (
        <></>
      )}
      {filteredData.length < 1 ? (
        <SectionList />
      ) : (
        filteredData.map((item, index) => {
          return <Phrase key={`${item.category}${index}`} {...item} />;
        })
      )}
    </>
  );
};
