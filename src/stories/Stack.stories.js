import React from "react";
import Stack from "../components/Stack";

export default {
    title: 'Component/Stack',
    component: Stack,
    argTypes: {
        numberOfChildren: { type: 'number', defaultValue: 4}
    }
}

const Template = ({ numberOfChildren, ...args }) => (
<Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
        <div style=
            {{ 
                width: "50px", 
                height: "50px", 
                backgroundColor: "red", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center" 
            }}
        >
            { n + 1 }
        </div>
    ))}
</Stack>
);

export const Stk = Template.bind({})
Stk.args = {
    spacing: 2,
    direction: "row",
    wrap: false
}
