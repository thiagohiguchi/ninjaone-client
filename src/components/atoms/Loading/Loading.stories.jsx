import Loading from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
  args: {},
};

const Template = (args) => <Loading {...args} />;

export const Story = Template.bind({});
Story.args = {};
