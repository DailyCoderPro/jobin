
export const filterData = [
    {
        label: "Minimum Expirience",
        value: "minExp",
        type: "dropdown",
        options: [{
            key: "1 Years",
            value: 1
        },
        {
            key: "2 Years",
            value: 2
        },
        {
            key: "3 Years",
            value: 3
        },
        {
            key: "4 Years",
            value: 4
        },
        {
            key: "5 Years",
            value: 5
        },
        {
            key: "> 5 Years",
            value: 6
        }]
    },
    {
        label: "Location",
        value: "location",
        type: "dropdown",
        options: [{
            key: "remote",
            value: "remote"
        },
        {
            key: "",
            value: "On-Site"
        }
        ]
    },
    {
        label: "Minimum Base pay",
        value: "minJdSalary",
        type: "dropdown",
        options: [
            {
                key: "More than 50K",
                value: 50
            }, {
                key: "More than 100K",
                value: 100
            },
            {
                key: "More than 150K",
                value: 150
            }
        ]
    }


]
