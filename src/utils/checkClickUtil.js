

function checkClick(event, selector) {
    const cartDropdown = document.querySelector(selector);
    if (cartDropdown === null) return;
    let cartDropdownExist = event.target.className === cartDropdown.className;
    if (!cartDropdownExist) {
        let element = event.target.parentElement;
        do {
            if (element === cartDropdown) {
                cartDropdownExist = true;
                break
            }
            element = element.parentElement;
        }
        while (element !== null)
    }

    return cartDropdownExist
}

export default checkClick