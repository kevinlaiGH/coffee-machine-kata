const ordering = (input, givenAmount) => {
    if ("" === input){
        return "Drink maker makes nothing"
    }

    let splitByColon = input.split(":")
    let [productCode, sugarQuantity,stick]= [splitByColon[0], splitByColon[1], splitByColon[2]]
    const dict = {
        "C": {
            product: "coffee",
            price: 0.6
        },
        "H": {
            product:"chocolate",
            price: 0.5
        },
        "T": {
            product: "tea",
            price: 0.4
        },
        "O": {
            product: "orange juice",
            price: 0.6
        }
    }

    if (productCode in dict === true && sugarQuantity === 1||2 && stick === "0"){
        if (givenAmount >= dict[productCode]["price"]){
            return `Drink maker makes 1 ${dict[productCode]["product"]}, ${sugarQuantity} sugar and 1 stick`
        }
        let amountReceivable = (dict[productCode]["price"] - givenAmount).toFixed(1)
        return `Missing ${amountReceivable}`
    }

    if (productCode in dict === true){
        if (givenAmount >= dict[productCode]["price"]){
            return `Drink maker makes 1 ${dict[productCode]["product"]}`
        }
        let amountReceivable = (dict[productCode]["price"] - givenAmount).toFixed(1)
        return `Missing ${amountReceivable}`
    }
}

const messaging = (msg) => {

    if ("" === msg){
        return "Drink maker forwards nothing"
    }
    let splitMsg = msg.split("")
    let [msg1, msg2]= [msg.split("")[0], msg.split("")[1]]
    if (msg1 === "M" && msg2 ===":"){
        let lastFewItems = splitMsg.slice(-(splitMsg.length-2))
        return `Drink maker forwards ${lastFewItems.join("")}`
    }
}

// zz = ordering("X:2:0",0.4)
// console.log(zz)

module.exports = {
    ordering, messaging
}