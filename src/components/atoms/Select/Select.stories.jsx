import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  args: {},
};

const Template = (args) => <Select {...args} />;

export const Story = Template.bind({});
Story.args = {};
