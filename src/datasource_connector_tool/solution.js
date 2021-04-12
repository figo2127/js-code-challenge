// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.  
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).  

// global.fetch = require("node-fetch");
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class Price {
    constructor(buy, sell, id, pair, timestamp) {
        this.buy = buy
        this.sell = sell
        this.id = id
        this.pair = pair
        this.timestamp = timestamp
    }
    mid() {
        let x = (this.buy + this.sell) / 2
        return x
    }
    quote() {
        var amt = "";
        //retrieve the currency:
        for (var i = 3; i < this.pair.length; i++) {
            // console.log(this.pair)
            amt += this.pair[i]
        }
        return amt;
    }
} 
// fetch() is equivalent of request.open() in XHR
// fetch() returns a Promise
// Datasource Controller
class Datasource {
    getPrices() {
        return fetch('https://static.ngnrs.io/test/prices')
            .then(res => {
                if (res.ok) {
                    console.log('SUCCESS')
                }
                else {
                    console.log('Not successful')
                }
                return res.json()
            }).then(data => {
                // console.log(data['data']);
                var coin_currency_arr = [];
                let data_arr = data['data']['prices'];
                // console.log(data_arr)
                
                for (var i = 0; i < data_arr.length; i++) {
                    let price_ds = new Price(data_arr[i].buy, data_arr[i].sell, data_arr[i].id, data_arr[i].pair, data_arr[i].timestamp);
                    coin_currency_arr.push(price_ds);
                }
                return coin_currency_arr;
        }, err => {
            return err;
        })
  }
}

const fetch = require('node-fetch');

// Abstraction 
let ds = new Datasource();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });
