// export all components to build as a library
import "../../theme/main.scss";
//
// atoms
//
export { default as VButton } from "../../stories/atoms/Button.vue";
export { default as VImg } from "../../stories/atoms/BaseImage.vue";

//
// molecules
//

export { default as VDropdown } from "../../stories/molecules/dropdown/Dropdown.vue";
export { default as VInputGroup } from "../../stories/molecules/input-group/InputGroup.vue";
export { default as VModal } from "../../stories/molecules/modal/Modal.vue";
export { default as VToast } from "../../stories/molecules/toast/Toast.vue";
export { default as VSlider } from "../../stories/molecules/slider/Slider.vue";

//
// organisms
//
export { default as VContactForm } from "../../stories/organisms/contact-form/ContactForm.vue";
export { default as VEmailSubscribe } from "../../stories/organisms/email-subscribe/EmailSubscribe.vue";
export { default as VNav } from "../../stories/organisms/nav/NavMain.vue";
export { default as VFooter } from "../../stories/organisms/footer/Footer.vue";

//
// pages
//
export { default as VNotFound } from "../../stories/pages/NotFoundComponent.vue";
