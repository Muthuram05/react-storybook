import Button from "../Button";

export default{
    tittle : 'Button',
    component : Button
}

const Template = args => <Button {...args} />
export const Red =  Template.bind({})
Red.args = {
    backgroundColor : 'green',
    label : "click me",
    size : 'md',
    disable:'false'
}
