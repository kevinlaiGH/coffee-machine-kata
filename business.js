
const moneycheck = (amount) => {
    let price = {tea: 0.4, coffee: 0.6, chocolate: 0.5}

    console.log(price["tea"])



    if ( amount === price){
        console.log("YEAHHH")
    }
}

zz = moneycheck(0.4)

console.log(zz)

module.exports = {
    moneycheck
}