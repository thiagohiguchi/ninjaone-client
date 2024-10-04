import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {},
};

const Template = (args) => <Button {...args} />;

export const Story = Template.bind({});
Story.args = {};
