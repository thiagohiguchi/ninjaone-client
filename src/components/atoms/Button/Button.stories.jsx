import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  onClick: () => alert("Default Button Clicked!"),
};

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Primary Button",
  onClick: () => alert("Primary Button Clicked!"),
};
