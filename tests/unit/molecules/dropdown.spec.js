import { VDropdown } from "@/components";
import { shallowMount } from "@vue/test-utils";

describe("dropdown", () => {
  const wrapper = shallowMount(VDropdown, {
    propsData: {
      dropdowns: [
        {
          title: "ONE TITLE",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non, dignissimos asperiores ipsum aliquam expedita porro enim ipsam sequi? Numquam esse incidunt quam nihil nam fugiat dignissimos dolorum reiciendis tempora",
          isActive: true,
        },
        {
          title: "TWO TITLE",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non, dignissimos asperiores ipsum aliquam expedita porro enim ipsam sequi? Numquam esse incidunt quam nihil nam fugiat dignissimos dolorum reiciendis tempora",
          isActive: false,
        },
      ],
    },
  });

  it("renders", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVisible()).toBeTruthy();
  });

  it("changes active dropdown", () => {
    const dropdown = wrapper.props().dropdowns[1];
    wrapper.vm.onActive(dropdown);
    expect(dropdown.isActive).toBeTruthy();
    expect(wrapper.emitted().click[0][0]).toEqual(dropdown);
  });
});
