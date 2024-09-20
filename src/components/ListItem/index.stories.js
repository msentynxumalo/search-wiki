import React from "react";
import Item from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/SearchItem",
  component: Item,
};

const Template = (args) => <Item {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "https://en.wikipedia.org/wiki/Chelsea_F.C.",
  label: "Test data for demo",
};
