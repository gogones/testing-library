/**
 * 👋👋
 *
 * Here we're testing the Recoil atoms and selectors themselves.
 *
 * Compared to the integration tests, these can be a bit harder to set up,
 * as you can see with the useEffect in the last test 😅.
 *
 * Also, the tests might break if we change how our code works, even
 * if the results are still the same, which doesn't inspire confidence in our tests,
 * and makes them hard to maintain.
 *
 * This is why testing **how** your code is used is a better approach.
 * Head over to integration.test.tsx to see this.
 */

import { renderHook } from "@testing-library/react-hooks";
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { searchQueryState, queryLengthState } from "./Search";
import { useEffect } from "react";

// Test the searchQuery Atom
describe("searchQueryState", () => {
  it("should initialise with a blank string", () => {
    const { result } = renderHook(() => useRecoilValue(searchQueryState), {
      wrapper: RecoilRoot
    });

    expect(result.current).toEqual("");
  });
});

// Test the queryLength Selector
describe("queryLengthState", () => {
  it("should return No Query if the query is empty", () => {
    const { result } = renderHook(() => useRecoilValue(queryLengthState), {
      wrapper: RecoilRoot
    });

    expect(result.current).toEqual("No Query");
  });

  it("should return the length otherwise", async () => {
    const query = "Hello World";

    const { result } = renderHook(
      () => {
        // Set searchQueryState to "Hello World" so that we can test our selector.
        // We can probably mock this out, too. But I haven't tested that.
        const setSearchQuery = useSetRecoilState(searchQueryState);
        useEffect(() => {
          setSearchQuery(query);
        }, [setSearchQuery]);

        return useRecoilValue(queryLengthState);
      },
      {
        wrapper: RecoilRoot
      }
    );

    expect(result.current).toEqual(query.length);
  });
});
