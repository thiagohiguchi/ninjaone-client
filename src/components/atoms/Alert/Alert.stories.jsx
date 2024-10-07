import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  args: {},
};

const Template = (args) => {
  return <Alert {...args} isVisible={true} />;
};

export const Default = Template.bind({});
Default.args = {
  type: "default",
  message: "This is a default alert!",
  isVisible: true,
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  message: "This is a warning alert!",
  isVisible: true,
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  message: "This is an error alert!",
  isVisible: true,
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  message: "This is a success alert!",
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  type: "default",
  message: "This alert is hidden!",
  isVisible: false,
};
