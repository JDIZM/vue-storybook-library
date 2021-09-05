import { VContactForm } from "@/components";
import { mount, shallowMount } from "@vue/test-utils";

const inputs = [
  {
    name: "name",
    type: "text",
    label: "What's your name?",
    placeholder: "James",
    icon: "person",
    showIcon: true,
    showError: false,
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "What's your email?",
    placeholder: "hello@jamesdonnelly.dev",
    icon: "email",
    showIcon: true,
    showError: false,
    required: true,
  },
  {
    name: "phone",
    type: "phone",
    label: "What's your phone number?",
    placeholder: "0161 123 4567",
    icon: "phone",
    showIcon: true,
    showError: false,
    required: true,
  },
  {
    name: "message",
    type: "textarea",
    label: "Leave us a message",
    placeholder: "Enter a message",
    icon: "message",
    showIcon: true,
    showError: false,
  },
];

describe("contact form", () => {
  const wrapper = shallowMount(VContactForm, {
    propsData: {
      inputs,
    },
  });

  it("renders with props and data", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVisible()).toBeTruthy();
    expect(wrapper.props().inputs.length).toBe(4);
    expect(mounted.vm.$data.showToast).toBeFalsy();
    expect(mounted.vm.$data.msg).toBe("");
    expect(mounted.vm.$data.values).toEqual([]);
  });

  it("has 4 inputs", () => {
    const inputs = wrapper.findAll("forminput-stub");
    expect(inputs.at(0).exists()).toBeTruthy();
    expect(inputs.at(1).exists()).toBeTruthy();
    expect(inputs.at(2).exists()).toBeTruthy();
    expect(inputs.at(3).exists()).toBeTruthy();
  });

  it("has a button", () => {
    const button = wrapper.find("button-stub");
    expect(button.exists()).toBeTruthy();
  });

  it("has a toast notification", () => {
    const toast = wrapper.find("toast-stub");
    expect(toast.exists()).toBeTruthy();
  });

  const mounted = mount(VContactForm, {
    propsData: {
      inputs,
    },
  });

  it("fires onError method with message", () => {
    mounted.vm.onError();
    expect(mounted.vm.$data.msg).toBe("there was an error sending the form");
    expect(mounted.emitted().error).toBeTruthy();
    expect(mounted.emitted().error[0][0]).toBe(mounted.vm.$data.msg);
    expect(!mounted.emitted().error).toBeFalsy();
  });

  it("shows an error when submit without data", async () => {
    await mounted.setData({
      values: [],
    });
    mounted.vm.onSubmit();
    expect(mounted.vm.$data.values).toEqual([]);
    expect(mounted.vm.$data.showToast).toBeTruthy();
    // two errors have now been emitted
    expect(mounted.emitted().error.length).toBe(2);
    expect(mounted.emitted().error[0][0]).toBe(mounted.vm.$data.msg);
  });

  it("fires onSubmit method with data", async () => {
    await mounted.setData({
      values: ["one", "two", "three", "four"],
    });
    mounted.vm.onSubmit();
    expect(mounted.emitted().submit).toBeTruthy();
    expect(mounted.emitted().submit[0][0]).toEqual([
      "one",
      "two",
      "three",
      "four",
    ]);
    expect(!mounted.emitted().submit).toBeFalsy();
  });

  it("fires onUpdate method with data", async () => {
    await mounted.setData({
      values: [],
    });
    mounted.vm.onUpdate("name", 0);
    expect(mounted.vm.$data.values[0]).toBe("name");
  });
});
