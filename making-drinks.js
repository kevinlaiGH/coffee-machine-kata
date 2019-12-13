const ordering = (input, givenAmount) => {
    if ("" === input){
        return "Drink maker makes nothing";
    }
    let splitByColon = input.split(":");
    let [sugarQuantity,stick]= [ splitByColon[1], splitByColon[2]];

    let codeAndHot =  splitByColon[0].split("");
    let [code, hot] = [codeAndHot[0], codeAndHot[1]];

    const dict = {
        "C": {product: "coffee", price: 0.6},
        "H": {product:"chocolate", price: 0.5},
        "T": {product: "tea", price: 0.4},
        "O": {product: "orange juice", price: 0.6}
    };
    const extraHot  = hot === "h" ? ' extra hot' : '';
    const sugarRequirements =  sugarQuantity > 0 && sugarQuantity < 3;
    const productText = dict[code]["product"];
    const sugarText = sugarRequirements ? `, ${sugarQuantity} sugar` : ``;
    const stickText = stick === "0"? ` and 1 stick` : ``;

    // let summary = {
    //     "C": {sold: 0},
    //     "H": {sold: 0},
    //     "T": {sold: 0},
    //     "O": {sold: 0}
    // };

    // let totalMessage = () => {
    //     let productOfPriceAndQuantity = ["C","H","T","O"].map( x => summary[x]["sold"] * dict[code]["price"]);
    //     let totalAmount = productOfPriceAndQuantity.reduce((a,b) => a+b);
    //     return `Total amount of money earned so far: ${totalAmount}
    //         Coffee sold: ${summary[code]["sold"]}
    //         Hot Chocolate sold: ${summary[code]["sold"]}
    //         Tea sold: ${summary[code]["sold"]}
    //         Orange sold: ${summary[code]["sold"]}`;
    // };

    if (givenAmount < dict[code]["price"]) {
        let amountReceivable = (dict[code]["price"] - givenAmount).toFixed(1);
        return `Missing ${amountReceivable}`;
    }
    return `Drink maker makes 1${extraHot} ${productText}${sugarText}${stickText}`;
};

const messaging = (msg) => {

    if ("" === msg){
        return "Drink maker forwards nothing";
    }
    let splitMsg = msg.split("");
    let [msg1, msg2]= [msg.split("")[0], msg.split("")[1]];
    if (msg1 === "M" && msg2 ===":"){
        let lastFewItems = splitMsg.slice(-(splitMsg.length-2));
        return `Drink maker forwards ${lastFewItems.join("")}`
    }
};

module.exports = {
    ordering, messaging
};