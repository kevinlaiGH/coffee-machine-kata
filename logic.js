const ordering = (input) => {

    if ("" === input){
        return "Drink maker makes nothing"
    }
    let splitArr = input.split("")
    let item1= input.split("")[0]
    let item2 = input.split("")[1]
    let item3 = input.split("")[2]
    let item4 = input.split("")[3]
    let item5 = input.split("")[4]

    const symbol = ["C", "H", "T"]

    let check1 = symbol.includes(item1)

    const dict = { "C": "coffee", "H": "chocolate","T":"tea" }

    if (check1 === true && item2 === ":" && item3 ===":"){
        return `Drink maker makes 1 ${dict[item1]}`
    }

    if (check1 === true && item2 === ":" && item3 === 1||2 && item4 ===":" && item5 === "0"){
        return `Drink maker makes 1 ${dict[item1]}, ${item3} sugar and 1 stick`
    }
}



module.exports = {
    ordering,
}