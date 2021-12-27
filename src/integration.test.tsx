/**
 * 👋👋
 *
 * Here we're testing how the component will actually be used.
 * So if we changed the underlying implementation (switched to Redux, for example 🤪),
 * the tests won't break. And the test will only break if the data the user sees changes.
 *
 * And that's fine! Because all the user cares about is what they see,
 * not about the underlying implementation.
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Search } from "./Search";
import { RecoilRoot } from "recoil";

describe("Search", () => {
  it("should initialise with an empty search input", () => {
    const { queryByTestId } = render(<Search />, { wrapper: RecoilRoot });

    const input = queryByTestId("input") as HTMLInputElement;
    expect(input.value).toEqual("");
  });

  it('should initialise with "No Query"', () => {
    const { queryByTestId } = render(<Search />, { wrapper: RecoilRoot });

    const queryLength = queryByTestId("query-length") as HTMLDivElement;
    expect(queryLength.innerHTML).toEqual("Query Length: No Query");
  });

  it("should display the query length", async () => {
    const { queryByTestId } = render(<Search />, { wrapper: RecoilRoot });

    const input = queryByTestId("input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Hello World" } });

    const queryLength = queryByTestId("query-length") as HTMLDivElement;
    expect(queryLength.innerHTML).toEqual("Query Length: 11");
  });
});
