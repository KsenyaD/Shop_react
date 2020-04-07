
function filter(array, category, text) {
    let filterArray = array;
    switch (category) {
        case "Electronics" :
            filterArray = array.filter((value, index) => {
                return value.category === "Electronics";
            });
            break;
        case "Dishes" :
            filterArray = array.filter((value, index) => {
                return value.category === "Dishes";
            });
            break;
        case "Food" :
            filterArray = array.filter((value, index) => {
                return value.category === "Food";
            });
            break;
    }
    return filterArray.filter((value, index) => {
        return value.name.includes(text)
    });
}

export default filter