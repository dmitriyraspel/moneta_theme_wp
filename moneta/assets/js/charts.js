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
        for (let i = 0; i < coins.length; i++) {
                coin_GPS_Sell.push(coins[i].Sell);
                coin_GPS_Buy.push(coins[i].Buy);
                let temp_date = new Date(coins[i].ParseDate)

                let year = temp_date.getFullYear(),
                    mounth = temp_date.getMonth() < 10? "0"+temp_date.getMonth(): temp_date.getMonth(),
                    day = temp_date.getDate() < 10? "0"+temp_date.getDate(): temp_date.getDate();
                labels_GPS.push( year+ "." + mounth + "." + day);
            console.log(temp_date);
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
                        text: 'Георгий победоносец, Санкт-Петербург 50г'
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
        for (let i = 0; i < coins.length; i++) {
            coin_GPM_Sell.push(coins[i].Sell);
            coin_GPM_Buy.push(coins[i].Buy);
            let temp_date = new Date(coins[i].ParseDate)

            let year = temp_date.getFullYear(),
                mounth = temp_date.getMonth() < 10? "0"+temp_date.getMonth(): temp_date.getMonth(),
                day = temp_date.getDate() < 10? "0"+temp_date.getDate(): temp_date.getDate();
            labels_GPM.push( year+ "." + mounth + "." + day);
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
                        text: 'Георгий победоносец, Москва 50г'
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
        for (let i = 0; i < coins.length; i++) {
            coin_GP100_Sell.push(coins[i].Sell);
            coin_GP100_Buy.push(coins[i].Buy);
            let temp_date = new Date(coins[i].ParseDate)

            let year = temp_date.getFullYear(),
                mounth = temp_date.getMonth() < 10? "0"+temp_date.getMonth(): temp_date.getMonth(),
                day = temp_date.getDate() < 10? "0"+temp_date.getDate(): temp_date.getDate();
            labels_GP100.push( year+ "." + mounth + "." + day);
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
                        text: 'Георгий победоносец, 100г'
                    }
                }
            },
        });
    });
}


loadGPSChart();
loadGPMChart();
loadGP100Chart();

// function hideChart() {
//     var GPSChartButton = document.getElementById( 'GPSChart-trigger' );
//     var GPSChartButton = document.getElementById( 'GPSChart-trigger' );
// }