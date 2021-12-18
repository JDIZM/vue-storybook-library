import { VSlider } from "@/components";
import { mount } from "@vue/test-utils";

const slides = [
  {
    title: "slide name",
    src: "https://source.unsplash.com/random/800x600",
  },
  {
    title: "slide name",
    src: "https://source.unsplash.com/1000x800/?nature,water",
  },
  {
    title: "slide name",
    src: "https://source.unsplash.com/random/900x600",
  },
  {
    title: "slide name",
    src: "https://source.unsplash.com/9000x800/?nature,water",
  },
];

describe("VSlider", () => {
  const wrapper = mount(VSlider, {
    propsData: {
      //
      slides,
      width: 500,
      height: 300,
    },
  });

  it("renders with props", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("has an active first slide", () => {
    const divs = wrapper.findAll("div");
    const activeSlide = divs.at(1);
    expect(activeSlide.attributes().class).toContain("--active");
  });

  it("changes slide", () => {
    wrapper.vm.selectSlide(2);
    expect(wrapper.vm.$data.currentSlide).toBe(2);
    expect(wrapper.emitted().slide[0][0]).toBe(2);
  });
});
