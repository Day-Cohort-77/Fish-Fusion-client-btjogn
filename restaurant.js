const fishMenu = (fishOptions) => {
    let htmlMenu = "<h1>Menu</h1>"
    htmlMenu += `

<article class="menu">`
    for (const fish of fishOptions) {
        htmlMenu += `
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
    `

    }
    htmlMenu += `</article>`
    return htmlMenu
}

module.exports = { fishMenu }