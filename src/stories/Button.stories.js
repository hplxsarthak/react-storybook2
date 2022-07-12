import React from "react";
import Button from "../components/Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { handleClick: { action: 'handleclick' }}
}

const Template = args => <Button {...args} />

export const Btn = Template.bind({})
Btn.args = {
    backgroundColor: 'red',
    label: "Red Button"
}