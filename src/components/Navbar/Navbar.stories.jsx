import Navbar from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  args: {},
};

const Template = (args) => <Navbar {...args} />;

export const Story = Template.bind({});
Story.args = {};
