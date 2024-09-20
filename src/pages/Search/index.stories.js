import React from "react";
import Moxios from 'moxios';
import Page from ".";

Moxios.install();
 // Match against an exact URL value
 Moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10', {
  status: 200,
  response: [
    "elon",
    [
        "Elon",
        "Elon Musk",
        "Elon Musk's Tesla Roadster",
        "Elon University",
        "Elongated Man",
        "Elon Musk (Isaacson book)",
        "Elon University School of Law",
        "Elongated coin",
        "Elon Phoenix men's soccer",
        "ElonJet"
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "https://en.wikipedia.org/wiki/Elon",
        "https://en.wikipedia.org/wiki/Elon_Musk",
        "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
        "https://en.wikipedia.org/wiki/Elon_University",
        "https://en.wikipedia.org/wiki/Elongated_Man",
        "https://en.wikipedia.org/wiki/Elon_Musk_(Isaacson_book)",
        "https://en.wikipedia.org/wiki/Elon_University_School_of_Law",
        "https://en.wikipedia.org/wiki/Elongated_coin",
        "https://en.wikipedia.org/wiki/Elon_Phoenix_men%27s_soccer",
        "https://en.wikipedia.org/wiki/ElonJet"
    ]
]
});

Moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=eveksfhgklhdfkjgshlshl&limit=50', {
  status: 200,
  response:["eveksfhgklhdfkjgshlshl",[],[],[]]
});

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Pages/Search",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  location: { search: "?query=elon" },
};

export const NoResult = Template.bind({});
NoResult.args = {
  location: { search: "?query=eveksfhgklhdfkjgshlshl" },
};
