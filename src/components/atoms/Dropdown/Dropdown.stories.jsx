import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {},
};

const Template = (args) => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  position: "bottom",
  name: "Select an option",
  items: ["Option 1", "Option 2", "Option 3"],
};

export const TopEndDropdown = Template.bind({});
TopEndDropdown.args = {
  position: "top-end",
  name: "Top End Dropdown",
  items: ["Option 1", "Option 2", "Option 3"],
};
