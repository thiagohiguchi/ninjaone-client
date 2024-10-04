import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {},
};

const Template = (args) => <Dropdown {...args} />;

export const Story = Template.bind({});
Story.args = {};
