// export all components to build as a library
import "../../theme/main.scss";
//
// atoms
//
export { default as VButton } from "../../stories/atoms/button/Button.vue";
export { default as VImg } from "../../stories/atoms/image/BaseImage.vue";
export { default as IconAlarm } from "../../stories/atoms/icons/Alarm.vue";
export { default as IconClose } from "../../stories/atoms/icons/Close.vue";
export { default as IconDone } from "../../stories/atoms/icons/Done.vue";
export { default as IconEmail } from "../../stories/atoms/icons/Email.vue";
export { default as IconGithub } from "../../stories/atoms/icons/Github.vue";
export { default as IconInfo } from "../../stories/atoms/icons/Info.vue";
export { default as IconInstagram } from "../../stories/atoms/icons/Instagram.vue";
export { default as IconLinkedIn } from "../../stories/atoms/icons/LinkedIn.vue";
export { default as IconList } from "../../stories/atoms/icons/List.vue";
export { default as IconMenu } from "../../stories/atoms/icons/Menu.vue";
export { default as IconMessage } from "../../stories/atoms/icons/Message.vue";
export { default as IconPerson } from "../../stories/atoms/icons/Person.vue";
export { default as IconPhone } from "../../stories/atoms/icons/Phone.vue";
export { default as IconTwitter } from "../../stories/atoms/icons/Twitter.vue";
export { default as IconWarning } from "../../stories/atoms/icons/Warning.vue";

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
