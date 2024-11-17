export const navItems = [
  { label: "About", link: "/about" },
  { label: "Our Impact", link: "/impact" },
  { label: "Partners", link: "/partners" },
  { label: "Get Involved", link: "/getinvolved" },
];

import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaDonate } from "react-icons/fa";
import { PiChalkboardTeacher } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";

export const services = [
  {
    icon: <FaDonate />,
    title: "Fundraising",
    description:
      "Our branches fundraise to promote low-cost CPR certification and help those affected with heart disease with financial and emotional support. We also donate to existing organizations to help with medical relief.",
  },
  {
    icon: <FaUserDoctor />,
    title: "Healthy Lifestyle",
    description:
      "We strive to promote healthier lifestyle choices to better our communities and educate people of all ages.",
  },
  {
    icon: <PiChalkboardTeacher />,
    title: "Education",
    description:
      "Our organization takes pride in promoting heart-health education to raise awareness on heart disease and reduce its effects on people, especially in schools where people are still developing. We also bring in professionals in the field to educate students to further better their understanding.",
  },
  {
    icon: <MdOutlineVolunteerActivism />,
    title: "Volunteer",
    description:
      "Our branches create community and school-wide events to work towards our mission, in addition to volunteering at existing events in their communities. This not only promotes our cause, but also helps build our communities in other aspects.",
  }
];

import { PiMoneyWavyDuotone, PiHandHeartDuotone, PiUserDuotone, PiChatsCircleDuotone } from "react-icons/pi";

export const signUps = [
  {
    icon: <PiUserDuotone />,
    img: "/splash_one.jpg",
    title: "Start a Branch",
    description:
      "We are always looking to expand our movement to new places all over the world! If you are interested in starting a branch, fill out this form!",
    redirectLink: "",
    formLinks: [{label: "Google Form", link: "https://docs.google.com/forms/d/1_7gjh3s7oWwWlRLpDfBl8IY7MblXGUMasFC-d1FxM-0/edit"}]
  },
  {
    icon: <PiMoneyWavyDuotone />,
    img: "/splash_one.jpg",
    title: "Donate",
    description:
      "Donations are always appreciated and go a long way to help our cause. Your donation will contribute to giving people a second chance and aiding their heart disease recovery process. In addition, you will be allowing for low cost CPR certifications worldwide to potentially save a life.",
    redirectLink: "",
    formLinks: [{label: "GoFundMe", link: "https://gofund.me/13dd91d0"}]
  },
  {
    icon: <PiHandHeartDuotone />,
    img: "/splash_one.jpg",
    title: "Volunteer",
    description:
      "If you are interested in volunteering with us, fill out the form below or send us an email!",
    redirectLink: "",
    formLinks: [{label: "Google Form", link: "https://forms.gle/U4nVkuj1jBYm4rJKA"}]
  },
  {
    icon: <PiChatsCircleDuotone />,
    img: "/splash_one.jpg",
    title: "Become a Partner",
    description:
      "If you are an organization, business, etc. and are interested in a partnership, fill out this form!",
    redirectLink: "",
    formLinks: [{label: "Google Form", link: "https://forms.gle/oCtAhXRcgxGJeNdA8"}]
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in, quam debitis nobis officia ipsum. Neque impedit repudiandae delectus quisquam quas.",
    person: "User 1",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in, quam debitis nobis officia ipsum. Neque impedit repudiandae delectus quisquam quas. Ipsum voluptate voluptatum suscipit aperiam animi? Ratione, obcaecati nemo?",
    person: "User 2",
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    person: "User 3",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in, quam debitis nobis officia ipsum.",
    person: "User 4",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in, quam debitis nobis officia ipsum. Neque impedit repudiandae delectus quisquam quas. Ipsum voluptate voluptatum suscipit aperiam animi? Ratione, obcaecati nemo?",
    person: "User 5",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in, quam debitis nobis officia ipsum. Neque impedit repudiandae delectus quisquam quas.",
    person: "User 6",
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    person: "User 7",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in, quam debitis nobis officia ipsum. Neque impedit repudiandae delectus quisquam quas. Ipsum voluptate voluptatum suscipit aperiam animi? Ratione, obcaecati nemo?",
    person: "User 8",
  },
];

export const contacts = [
  "Phone: Coming Soon",
  "Email: hearts4hope@gmail.com",
  "Address: Email For More Information",
];

import { FaInstagram, FaFacebook } from "react-icons/fa";

export const socials = [
  { icon: <FaInstagram />, link: "" },
  { icon: <FaFacebook />, link: "" },
];
