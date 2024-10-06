import AddDeviceModal from "./AddDeviceModal";

export default {
  title: "./AddDeviceModal",
  component: AddDeviceModal,
  args: {},
};

const Template = (args) => <AddDeviceModal {...args} />;

export const Story = Template.bind({});
Story.args = {};
