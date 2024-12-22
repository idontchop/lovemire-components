import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { NavButton } from "../../components-old/NavButton";

export default {
  title: "Old/NavButton",
  component: NavButton,
} as Meta<typeof NavButton>;

const Template: StoryFn<typeof NavButton> = (args) => <NavButton {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  selected: false,
  children: "Flirt on the big title",
};

export const Switcher = () => {
  const [value, setValue] = React.useState(false);

  return (
    <div style={{ width: "120px" }}>
      <div style={{ height: "8vh" }}>
        <NavButton
          notifications={[59, 22233333322]}
          selected={value}
          onClick={() => setValue(!value)}
        >
          Flirt
        </NavButton>
      </div>
      <NavButton
        notifications={[5, 22233333322]}
        selected={!value}
        onClick={() => setValue(!value)}
      >
        Flirt on the big title
      </NavButton>
    </div>
  );
};
