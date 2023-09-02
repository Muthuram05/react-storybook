import Outline from "../Outline"



export default{
    tittle : 'Outline',
    component : Outline
}

const Template = args => <Outline {...args} />
export const Green =  Template.bind({})
Green.args = {
    label : "click me",
    size : 'md',
    disable:'false'
}
