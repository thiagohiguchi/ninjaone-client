import DeviceTypeIcon from "./DeviceTypeIcon";

export default {
  title: "Components/DeviceTypeIcon",
  component: DeviceTypeIcon,
  ARGS: { TYPE: ["WINDOWS", "LINUX", "MAC"] },
};

const Template = (args) => <DeviceTypeIcon {...args} />;

export const Story = Template.bind({});
Story.args = {};
