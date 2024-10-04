import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {},
};

const Template = (args) => <Input {...args} />;

export const Story = Template.bind({});
Story.args = {};
