import React from "react";

export const IntroMessage: React.FC = () => {
  return (
    <div style={{ margin: "0 auto", width: 500 }}>
      <h3>
        Hi! This is a super simple example of how you can test your Recoil apps.
      </h3>
      <p>
        There are two sets of tests. One lives in <code>hooks.test.tsx</code>,
        and the other lives in <code>integration.test.tsx</code>.
      </p>
      <p>
        The main point of this example is to show that you can test your Recoil
        state (and any React hooks, for that matter) the same way you test
        everything else in React: by testing how your code is used, not how it's
        implemented.
      </p>
      <p>
        In the{" "}
        <a href="https://kentcdodds.com/blog/testing-implementation-details">
          wise words
        </a>{" "}
        of Kent C. Dodds:
      </p>
      <blockquote>
        "The more your tests resemble the way your software is used, the more
        confidence they can give you."
      </blockquote>
      <p>
        If you are interested in reading more about React testing, check out the{" "}
        <a href="https://testing-library.com/docs/guiding-principles">
          React Testing Library's Guiding Principles
        </a>
        , and anything else really by Kent C. Dodds 😜.
      </p>
    </div>
  );
};

export const OutroMessage: React.FC = () => {
  return (
    <div>
      Made with ♥️ in beautiful Cape Town by{" "}
      <a href="https://twitter.com/jacques_codes">@jacques_codes</a>
    </div>
  );
};
