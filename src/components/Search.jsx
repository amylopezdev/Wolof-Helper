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

  return (
    <>
      <SearchInput handleChange={handleChange} />

      {filteredData.length < 1 && searchField !== "" ? (
        <div className="error">No results found</div>
      ) : filteredData.length > 1 ? (
        <div>{filteredData.length} results found</div>
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
