
const countries = [
    {
        id:"India",
        active:50000,
        total:70000,
        recovered:10000
    },
    {
        id:"USA",
        active:950000,
        total:1170000,
        recovered:200000
    }
]

export const getCountries = () => {
    return JSON.parse(JSON.stringify(countries));
}

