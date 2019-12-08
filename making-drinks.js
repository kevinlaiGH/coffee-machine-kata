const ordering = (input, givenAmount) => {

    if ("" === input){
        return "Drink maker makes nothing"
    }
    let splitArr = input.split("")
    let [item1, item2, item3, item4, item5]= [input.split("")[0], input.split("")[1], input.split("")[2], input.split("")[3], input.split("")[4]]

    const symbol = ["C", "H", "T"]

    let check1 = symbol.includes(item1)

    const dict = { "C": "coffee", "H": "chocolate","T":"tea" }
    const priceDict = { "C": 0.6, "H": 0.5, "T": 0.4}


    if (check1 === true && item2 === ":" && item3 ===":"){
        if (givenAmount >= priceDict[item1]){
            return `Drink maker makes 1 ${dict[item1]}`
        }
        let amountReceivable = (priceDict[item1] - givenAmount).toFixed(2)
        return `Missing ${amountReceivable}`
    }

    if (check1 === true && item2 === ":" && item3 === 1||2 && item4 ===":" && item5 === "0"){
        if (givenAmount >= priceDict[item1]){
            return `Drink maker makes 1 ${dict[item1]}, ${item3} sugar and 1 stick`
        }
        let amountReceivable = (priceDict[item1] - givenAmount).toFixed(1)

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

// zz = ordering("H:2:0",0.4)
// console.log(zz)

module.exports = {
    ordering, messaging
}