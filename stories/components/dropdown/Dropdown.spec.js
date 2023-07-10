import { render, screen, fireEvent } from "@testing-library/vue";
import { composeStories } from "@storybook/testing-vue";
import * as stories from "./Dropdown.stories";

const { Primary } = composeStories(stories);

const dropdowns = [
  {
    title: "ONE TITLE",
    content: "first dropdown content",
    isActive: false
  },
  {
    title: "TWO TITLE",
    content: "second dropdown content",
    isActive: false
  }
];

describe("Dropdown", () => {
  describe("Primary", () => {
    it("renders primary dropdown", () => {
      render(Primary({ dropdowns }));

      expect(screen.getByText(dropdowns[0].title)).toBeTruthy();
      expect(screen.getByText(dropdowns[0].content)).toBeTruthy();
      expect(screen.getByText(dropdowns[1].title)).toBeTruthy();
      expect(screen.getByText(dropdowns[1].content)).toBeTruthy();
    });

    it("activates a dropdown on click", async () => {
      await render(Primary({ dropdowns }));
      const dropdown = screen.getByText("ONE TITLE");

      await fireEvent.click(dropdown);

      expect(dropdowns[0].isActive).toBe(true);
      expect(dropdowns[1].isActive).toBe(false);
    });
  });
});
