import { VNav } from "@/components";
import { mount, RouterLinkStub } from "@vue/test-utils";

const links = [
  { name: "Item", path: "/" },
  { name: "Item", path: "/about/" },
  { name: "Dropdown" },
  { name: "Item", path: "/contact/" },
];

const dropdownItems = [
  { name: "Dropdown One", path: "/dropdown-one/" },
  { name: "Dropdown Two", path: "/dropdown-two/" },
  { name: "Dropdown Three", path: "/dropdown-three/" },
];

describe("nav", () => {
  const wrapper = mount(VNav, {
    stubs: {
      RouterLink: RouterLinkStub,
    },
    propsData: {
      links,
      dropdownItems,
      showDrawer: false,
      showDropdown: false,
      primary: true,
      logoSrc: "logo.png",
      phone: "0161 123 4567",
    },
  });

  it("renders a logo", () => {
    expect(wrapper.props().logoSrc).toBe("logo.png");
  });

  it("renders links", () => {
    expect(wrapper.findAllComponents(RouterLinkStub).at(0).props().to).toBe(
      "/"
    );
    expect(wrapper.findAllComponents(RouterLinkStub).at(1).props().to).toBe(
      "/about/"
    );
    expect(wrapper.findAllComponents(RouterLinkStub).at(2).props().to).toBe(
      "/contact/"
    );
  });

  it("emits onDropdown event", () => {
    wrapper.vm.onDropdown();
    expect(wrapper.emitted().onDropdown).toBeTruthy();
  });

  it("emits onEnquire event", () => {
    wrapper.vm.onEnquire();
    expect(wrapper.emitted().onEnquire).toBeTruthy();
  });

  it("emits onRouteChange event", () => {
    wrapper.vm.onRouteChange();
    expect(wrapper.emitted().onReset).toBeTruthy();
  });

  it("emits onShowDrawer event", () => {
    wrapper.vm.onShowDrawer();
    expect(wrapper.emitted().onShowDrawer).toBeTruthy();
  });

  it("emits onCloseDrawer event", () => {
    wrapper.vm.onCloseDrawer();
    expect(wrapper.emitted().onCloseDrawer).toBeTruthy();
  });
});
