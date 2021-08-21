import ContactForm from "../../../stories/organisms/contact-form/ContactForm.vue";
import { shallowMount } from "@vue/test-utils";

describe("contact form", () => {
  const wrapper = shallowMount(ContactForm, {
    propsData: {
      inputs: [
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
      ],
    },
  });

  it("renders with props", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.isVisible()).toBeTruthy();
    expect(wrapper.props().inputs.length).toBe(4);
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
});
