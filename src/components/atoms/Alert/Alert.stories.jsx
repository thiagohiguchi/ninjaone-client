import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  args: {},
};

const Template = (args) => <Alert {...args} />;

export const Story = Template.bind({});
Story.args = {};
