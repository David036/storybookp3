import DoughnutChart from ".";

export default {
    title: "DoughnutChart",
    component: DoughnutChart,
    argTypes: {
      size: {
        type: "string",
        description: "Chart size option",
        defaultValue: "medium",
        options: ["small", "medium", "large"],
        control: {
          type: "radio",
        },
      },
    },
  };
  
  const Template = (arg) => <DoughnutChart {...arg} />;
  
  export const Place = Template.bind({});
  Place.args = {
    size: "medium",
    datas:[17098250, 9879750, 9600013, 9831510,8515770,7741220]
  };
  export const Population = Template.bind({})
  Population.args = {
    size:"medium",
    datas:[146073911,38478585,1451689993,335321637,215921729,26157569]
  }
  