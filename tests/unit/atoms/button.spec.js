import { VButton } from "@/components";
import { shallowMount } from "@vue/test-utils";

describe("button", () => {
  const wrapper = shallowMount(VButton, {
    propsData: {
      label: "button text",
    },
  });

  it("renders with label", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVisible()).toBeTruthy();
    expect(wrapper.props().label).toMatch("text");
    expect(wrapper.text()).toMatch("text");
  });

  it("renders secondary button", async () => {
    await wrapper.setProps({
      secondary: true,
    });
    expect(wrapper.attributes().class).toContain("btn--secondary");
  });

  it("renders primary button", async () => {
    await wrapper.setProps({
      primary: true,
    });
    expect(wrapper.attributes().class).toContain("btn--primary");
  });

  // it("fires a method then emits event", () => {
  //   wrapper.vm.onClick("123");
  //   expect(wrapper.emitted().click).toBeTruthy();
  //   expect(wrapper.emitted().click[0][0]).toBe("123");
  //   expect(!wrapper.emitted().click).toBeFalsy();
  // });
});
