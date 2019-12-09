const ordering = (input, givenAmount) => {
    if ("" === input){
        return "Drink maker makes nothing"
    }

    let splitByColon = input.split(":")
    let [sugarQuantity,stick]= [ splitByColon[1], splitByColon[2]]

    let isHot =  splitByColon[0].split("")

    const getProdCode = () => {
        return isHot[0]
    }
    const extraHot = () => {
        if (isHot[1] === "h"){
            return `extra hot`
        }
        return ``
    }

    const dict = {
        "C": {product: "coffee", price: 0.6},
        "H": {product:"chocolate", price: 0.5},
        "T": {product: "tea", price: 0.4},
        "O": {product: "orange juice", price: 0.6}
    }

    // let report ={
    //     "C": {sold: 0, price: 0.6},
    //     "H": {sold: 0, price: 0.5},
    //     "T": {sold: 0, price: 0.4},
    //     "O": {sold: 0, price: 0.6}
    // }

    const sugarRequirements =  sugarQuantity > 0 && sugarQuantity < 3

    const productCodeExist = dict.hasOwnProperty("C") || dict.hasOwnProperty("H") || dict.hasOwnProperty("T") ||  dict.hasOwnProperty("O")

    if (productCodeExist === true && sugarRequirements === true && stick === "0"){
        if (givenAmount >= dict[getProdCode()]["price"]){
            // report[getProdCode()]["sold"] += 1
            if (isHot[1] === "h"){
                return `Drink maker makes 1 ${extraHot()} ${dict[getProdCode()]["product"]}, ${sugarQuantity} sugar and 1 stick`
            }
            return `Drink maker makes 1 ${dict[getProdCode()]["product"]}, ${sugarQuantity} sugar and 1 stick`
        }
        let amountReceivable = (dict[getProdCode()]["price"] - givenAmount).toFixed(1)
        return `Missing ${amountReceivable}`
    }

    if (productCodeExist === true){
        if (givenAmount >= dict[getProdCode()]["price"]){
            // report[getProdCode()]["sold"] += 1
            if (isHot[1] === "h"){
                return `Drink maker makes 1 ${extraHot()} ${dict[getProdCode()]["product"]}`
            }
            return `Drink maker makes 1 ${dict[getProdCode()]["product"]}`
        }
        let amountReceivable = (dict[getProdCode()]["price"] - givenAmount).toFixed(1)
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

zz = ordering("Ch:2:0",0.4)
console.log(zz)

module.exports = {
    ordering, messaging
}