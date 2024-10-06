import RemoveDeviceModal from "./RemoveDeviceModal";

export default {
  title: "./RemoveDeviceModal",
  component: RemoveDeviceModal,
  args: {},
};

const Template = (args) => <RemoveDeviceModal {...args} />;

export const Story = Template.bind({});
Story.args = {};
