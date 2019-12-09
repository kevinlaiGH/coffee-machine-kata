const ordering = (input, givenAmount) => {
    if ("" === input){
        return "Drink maker makes nothing"
    }

    let splitByColon = input.split(":")
    let [productCode, sugarQuantity,stick]= [splitByColon[0], splitByColon[1], splitByColon[2]]
    let isExtraHot = productCode.split("")[1]

    const dict = [
        {
            "pName": "coffee",
            "pCode": "C",
            "price": 0.6,
        },
        {
            "pName": "chocolate",
            "pCode": "H",
            "price": 0.5,
        },
        {
            "pName": "tea",
            "pCode": "T",
            "price": 0.4,
        },
        {
            "pName": "orange juice",
            "pCode": "O",
            "price": 0.6,
        }
    ]

    const extraHotOption = () =>{
        if (isExtraHot === "h"){
            return `extra hot`
        }
    }

    const sugarRequirements =  sugarQuantity > 0 && sugarQuantity < 3

    const productCodeExist = splitByColon[0] in ["C", "H", "T", "O"]

    if (productCodeExist === true && sugarRequirements === true && stick === "0"){
        if (givenAmount >= dict["price"]){
            return `Drink maker makes 1 ${dict[productCode]["product"]}, ${sugarQuantity} sugar and 1 stick`
        }
        let amountReceivable = (dict["price"] - givenAmount).toFixed(1)
        return `Missing ${amountReceivable}`
    }

    if (productCodeExist === true){
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

zz = ordering("Ch:2:0",0.4)
console.log(zz)

module.exports = {
    ordering, messaging
}