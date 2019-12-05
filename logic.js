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

}

module.exports = {
    ordering,

}