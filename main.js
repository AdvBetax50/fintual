//DONT FOCUS ON THIS

class Stock{
    constructor(name){
        this.name = name;
    }
    Price(date){
        //returns price of stock in date
        return date.getMonth() * 5;
    }
}

//FOCUS ON THIS

class Portfolio{

    stocks;

    Profit(date1,date2){
        //returns profit of Stock between date1 and date2
        let profit = 0;
        let indv_profit;
        this.stocks.forEach(function (stock){ //for each stock in stocks
            //calculate individual profit of a given stock
            let years = (date2.getYear()) - (date1.getYear());
            if (years === 0 && date2.getMonth() > date1.getMonth()){
                years = date2.getMonth() - date1.getMonth();
                years /= 12;
            }
            else if (years === 0 && date2.getMonth() < date1.getMonth()){
                years = 12 - date2.getMonth() + date1.getMonth();
                years /= 12; 
            }
            document.write(`Year = ${years}<br>`)
            indv_profit = (stock.Price(date2) / stock.Price(date1)) ** (1/years) -1 ;
            document.write(`${stock.name}, Price in July = ${stock.Price(date2)}, Prince in June = ${stock.Price(date1)}<br>`)
            document.write(`Individual Profit of ${stock.name} = ${indv_profit}<br><br>`)
            profit += indv_profit;
        });

        if (profit>0){
            alert('Nice investments, next Wolf of Wall Street')
        }
        else{
            alert('Told you to just take photos of NFTs, not buy them... ');
        }
        return profit;
    }
}


// Anual return = (Ending Value / Beginning Value)**1/Years    -  1


function main(){

    let date1 = new Date(2021,5);
    let date2 = new Date(2021,6);

    let avocado = new Stock("avocado");
    let av = avocado.Price(date1);
    let avo = avocado.Price(date2);

    let apple = new Stock("apple");
    let ap = apple.Price(date1);
    let app = apple.Price(date2);

    let pear = new Stock("pear");
    let pe = pear.Price(date1);
    let pea = pear.Price(date2);


    document.write(`Avocado in ${date1} = ${av} <br>Avocado in ${date2} = ${avo} <br>`) 
    document.write(`<br>Apple in ${date1} = ${ap} <br>Apple in ${date2} = ${app}<br>`) 
    document.write(`<br>Pear in ${date1} = ${pe}  <br>Pear in ${date2} = ${pea}<br>`) 

    let p = new Portfolio;
    document.write(`<br> <br>Portfolio created <br>`)

    p.stocks = [];
    p.stocks.push(avocado);
    p.stocks.push(apple);
    p.stocks.push(pear);

    document.write(`Stocks added to Portfolio <br>`)

    let a = p.Profit(date1,date2);

    document.write(`<br><br>Profit of Portfolio between June and July = ${a} <br>`)


}

main();