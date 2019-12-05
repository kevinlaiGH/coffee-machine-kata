const ordering = (input) => {
    if ("" === input){
        return "Drink maker makes nothing"
    }
    if ("C::" === input){
        return "Drink maker makes 1 coffee"
    }
    if ("H::" === input){
        return "Drink maker makes 1 chocolate"
    }
    if ("T::" === input){
        return "Drink maker makes 1 tea"
    }
    if ("T:1:0" === input){
        return "Drink maker makes 1 tea, 1 sugar and 1 stick"
    }

}

module.exports = {
    ordering,

}