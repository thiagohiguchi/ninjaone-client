import DeviceTypeIcon from "./DeviceTypeIcon";

export default {
  title: "Components/DeviceTypeIcon",
  component: DeviceTypeIcon,
  ARGS: { TYPE: ["WINDOWS", "LINUX", "MAC"] },
};

const Template = (args) => <DeviceTypeIcon {...args} />;

export const WindowsIcon = Template.bind({});
WindowsIcon.args = {
  type: "WINDOWS",
};

export const LinuxIcon = Template.bind({});
LinuxIcon.args = {
  type: "LINUX",
};

export const MacIcon = Template.bind({});
MacIcon.args = {
  type: "MAC",
};
