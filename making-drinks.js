const ordering = (input, givenAmount) => {
    if ("" === input){
        return "Drink maker makes nothing"
    }

    let splitByColon = input.split(":")
    let [sugarQuantity,stick]= [ splitByColon[1], splitByColon[2]]

    let codeAndHot =  splitByColon[0].split("")
    let [code, hot] = [codeAndHot[0], codeAndHot[1]]

    const extraHot = () => hot === "h" ? ' extra hot' : '';

    const dict = {
        "C": {product: "coffee", price: 0.6},
        "H": {product:"chocolate", price: 0.5},
        "T": {product: "tea", price: 0.4},
        "O": {product: "orange juice", price: 0.6}
    }

    const sugarRequirements =  sugarQuantity > 0 && sugarQuantity < 3
    const productCodeExist = dict.hasOwnProperty(code)

    if (productCodeExist === true && sugarRequirements === true && stick === "0"){
        if (givenAmount >= dict[code]["price"]){
            // report[getProdCode()]["sold"] += 1
            return `Drink maker makes 1${extraHot()} ${dict[code]["product"]}, ${sugarQuantity} sugar and 1 stick`
        }
        let amountReceivable = (dict[code]["price"] - givenAmount).toFixed(1)
        return `Missing ${amountReceivable}`
    }

    if (productCodeExist === true){
        if (givenAmount >= dict[code]["price"]){
            // report[getProdCode()]["sold"] += 1
            return `Drink maker makes 1${extraHot()} ${dict[code]["product"]}`
        }
        let amountReceivable = (dict[code]["price"] - givenAmount).toFixed(1)
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

// zz = ordering("Ch:2:0",0.4)
// console.log(zz)

module.exports = {
    ordering, messaging
}