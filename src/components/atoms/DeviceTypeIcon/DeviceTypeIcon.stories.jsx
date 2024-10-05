import DeviceTypeIcon from "./DeviceTypeIcon";

export default {
  title: "Components/DeviceTypeIcon",
  component: DeviceTypeIcon,
  args: { type: ["windows", "linux", "max"] },
};

const Template = (args) => <DeviceTypeIcon {...args} />;

export const Story = Template.bind({});
Story.args = {};
