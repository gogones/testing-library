import * as React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";

export const searchQueryState = atom({
  key: "searchQuery",
  default: ""
});

export const queryLengthState = selector({
  key: "queryLength",
  get: ({ get }) => {
    const length = get(searchQueryState).length;
    if (length === 0) return "No Query";
    return length;
  }
});

export const Search = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const queryLength = useRecoilValue(queryLengthState);

  return (
    <>
      <input
        data-testid="input"
        value={searchQuery}
        onChange={e => {
          setSearchQuery(e.target.value);
        }}
      />
      <div style={{ marginTop: 20 }} data-testid="query-length">
        Query Length: {queryLength}
      </div>
    </>
  );
};
