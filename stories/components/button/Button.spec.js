import { render, screen } from "@testing-library/vue";
import { composeStories } from "@storybook/testing-vue";
import * as stories from "./Button.stories"; // import all stories from the stories file

const { Primary, Secondary } = composeStories(stories); // composeStories will return an object with a key for each exported story

describe("Button", () => {
  describe("Primary", () => {
    it("renders primary button", () => {
      render(Primary());
      expect(screen.getByText("PRIMARY")).toBeTruthy();
    });
  });
  describe("Secondary", () => {
    it("renders secondary button", () => {
      render(Secondary());
      expect(screen.getByText("SECONDARY")).toBeTruthy();
    });
  });
});
