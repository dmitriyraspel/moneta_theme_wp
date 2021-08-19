var coin_GPS_Buy = [];
var coin_GPS_Sell = [];

var coin_GPM_Buy = [];
var coin_GPM_Sell = [];

var coin_GP100_Buy = [];
var coin_GP100_Sell = [];

var labels_GPS = [];
var labels_GPM = [];
var labels_GP100 = [];
var coins = [];

function loadGPSChart() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": 'https://goldtech.space/GoldTech-CoinsParser/api/v1/?mode=getallgpscoins',
        "method": "GET"
    };
    jQuery.ajax(settings).done(function (response) {
        coins = response.coins;
        
        var startCoins = coins.length >= 75 ? coins.length - 75 : coins.length;

        for (let i = startCoins; i < coins.length; i++) {
                coin_GPS_Sell.push(coins[i].Sell);
                coin_GPS_Buy.push(coins[i].Buy);
               
                labels_GPS.push(coins[i].ParseDate);
        }

        const data = {
            labels: labels_GPS,
            datasets: [
                {
                    label: 'Продажа',
                    data: coin_GPS_Sell,
                    borderColor: '#4641FF',
                    backgroundColor: '#f9f8f8',
                },
                {
                    label: 'Покупка',
                    data: coin_GPS_Buy,
                    borderColor: '#06d19c',
                    backgroundColor: '#f9f8f8',
                }
            ]
        };

        var ctx = document.getElementById('GPSChart');
        var GPSChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Георгий победоносец, Санкт-Петербург 50 рублей'
                    }
                }
            },
        });
    });
}

function loadGPMChart() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": 'https://goldtech.space/GoldTech-CoinsParser/api/v1/?mode=getallgpmcoins',
        "method": "GET"
    };
    jQuery.ajax(settings).done(function (response) {
        coins = response.coins;

        var startCoins = coins.length >= 75 ? coins.length - 75 : 0;

        for (let i = startCoins; i < coins.length; i++) {
            coin_GPM_Sell.push(coins[i].Sell);
            coin_GPM_Buy.push(coins[i].Buy);
           
            labels_GPM.push(coins[i].ParseDate);
        }

        const data = {
            labels: labels_GPM,
            datasets: [
                {
                    label: 'Продажа',
                    data: coin_GPM_Sell,
                    borderColor: '#4641FF',
                    backgroundColor: '#f9f8f8',
                },
                {
                    label: 'Покупка',
                    data: coin_GPM_Buy,
                    borderColor: '#06d19c',
                    backgroundColor: '#f9f8f8',
                }
            ]
        };

        var ctx = document.getElementById('GPMChart');
        var GPSChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Георгий победоносец, Москва 50 рублей'
                    }
                }
            },
        });
    });
}

function loadGP100Chart() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": 'https://goldtech.space/GoldTech-CoinsParser/api/v1/?mode=getallgp100coins',
        "method": "GET"
    };
    jQuery.ajax(settings).done(function (response) {
        coins = response.coins;

        var startCoins = coins.length >= 75 ? coins.length - 75 : 0;

        for (let i = startCoins; i < coins.length; i++) {
            coin_GP100_Sell.push(coins[i].Sell);
            coin_GP100_Buy.push(coins[i].Buy);
            
            labels_GP100.push(coins[i].ParseDate);
        }

        const data = {
            labels: labels_GP100,
            datasets: [
                {
                    label: 'Продажа',
                    data: coin_GP100_Sell,
                    borderColor: '#4641FF',
                    backgroundColor: '#f9f8f8',
                },
                {
                    label: 'Покупка',
                    data: coin_GP100_Buy,
                    borderColor: '#06d19c',
                    backgroundColor: '#f9f8f8',
                }
            ]
        };

        var ctx = document.getElementById('GP100Chart');
        var GPSChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Георгий победоносец, 100 рублей'
                    }
                }
            },
        });
    });
}

jQuery(document).ready(function(){

    loadGPSChart();
    loadGPMChart();
    loadGP100Chart();
    jQuery("#GPSChart-trigger").click(function(){
  
        jQuery("#coins-ratesGPS").css('display', 'block');
        jQuery("#coins-ratesGPM").css('display', 'none');
        jQuery("#coins-ratesGP100").css('display', 'none');
    });
    jQuery("#GPMChart-trigger").click(function(){
   
        jQuery("#coins-ratesGPM").css('display', 'block');
        jQuery("#coins-ratesGPS").css('display', 'none');
        jQuery("#coins-ratesGP100").css('display', 'none');
    });
    jQuery("#GP100Chart-trigger").click(function(){
     
        jQuery("#coins-ratesGP100").css('display', 'block');
        jQuery("#coins-ratesGPS").css('display', 'none');
        jQuery("#coins-ratesGPM").css('display', 'none');
    });
})
