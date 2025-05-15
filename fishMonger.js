const mongerInventory = (fishes) =>{
let mongerFish = []
for (const fish of fishes){
    if (fish.price <= 7.50 && fish.amount >= 10 ){
        fish.amount = 10
        mongerFish.push(fish)
    }
}
return mongerFish
}

const chefConstraints = (prices, budget) => {
    let rightPrice = []
    for(const price of prices){
        if (price.price <= budget){
            price.amount = 5
            rightPrice.push(price)
        }
    }
    return rightPrice
}

module.exports = {mongerInventory, chefConstraints }