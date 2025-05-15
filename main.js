const { fishMenu } = require("./restaurant.js")
const {chefConstraints, mongerInventory} = require("./fishMonger.js")
const {boatInventory, fishingResults} = require("./fishingBoat.js")

const dailyPriceLimit = 3.99

const invokeFish = boatInventory(fishingResults)
const invokeMonger = mongerInventory(invokeFish)
const invokeChefPrice = chefConstraints(invokeMonger, dailyPriceLimit)
const invokeMenu = fishMenu(invokeChefPrice)

console.log(invokeMenu)

