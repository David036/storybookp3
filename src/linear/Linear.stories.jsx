import Linear from ".";

export default {
    title:"Linear",
    component:Linear,
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
    }
}

const Template = (arg) => <Linear {...arg} />;

export const Place = Template.bind({});
Place.args = {
    size:"medium",
    utdData:[1, 2, 1, 7, 4, 5, 6, 2, 6, 3,2,6,5],
    cityData:[3, 1, 2, 1, 2, 4, 3, 1, 1, 2, 1, 1, 2]
};
export const Points = Template.bind({})
Points.args = {
    size:"medium",
    utdData:[78,89,86,64,62,49,54,68,65,66,73,57],
    cityData:[60,93,66,102,83,71,80,106,95,102,83,99]
}
