import DevicesManager from "./DevicesManager";

export default {
  title: "./DevicesManager",
  component: DevicesManager,
  args: {},
};

const Template = (args) => <DevicesManager {...args} />;

export const Story = Template.bind({});
Story.args = {};
