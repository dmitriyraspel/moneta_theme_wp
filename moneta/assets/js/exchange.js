var SberbankCoinUrl = 'https://www.sberbank.ru/proxy/services/coin-catalog/coins/5216-0060?region=38&condition=1';
var TkbbankCoinUrl = 'https://www.tkbbank.ru/private/savings/metal_accounts/coin/';
var ZolotoyZapasSPMD = "https://www.zolotoy-zapas.ru/coins-price/georgiy-pobedonosets-gold-quarter-oz-bullion-coin-spmd-russia/";
var ZolotoyZapasMMD = "https://www.zolotoy-zapas.ru/coins-price/georgiy-pobedonosets-gold-coin-quarter-oz/";
var ZolotoyZapasGP100 = "https://www.zolotoy-zapas.ru/coins-price/georgiy-pobedonosets-100-rub-gold-half-of-ounce-bullion-coin-2021-spmd-russia/";
var ZolotoyClub = "https://www.zolotoy-club.ru/";
var ZolotoMDSPMD = "https://zoloto-md.ru/bullion-coins/i-rossiya-i-sssr/zolotaya-investiczionnaya-moneta-georgij-pobedonosecz-mmd,-7,78-g-chistogo-zolota-proba-0,999";
var ZolotoMDMMD = "https://zoloto-md.ru/bullion-coins/i-rossiya-i-sssr/zolotaya-moneta-georgij-pobedonosecz-kupit-czena-investiczionnoj-monetyi-pobedonosecz-nominalom-50-rublej";
var MonetaInvestSPMD = "https://monetainvest.ru/50-rublej-georgij-pobedonosec-2020-spmd-au-7-78";
var MonetaInvestMMD = "https://monetainvest.ru/50-rublej-georgij-pobedonosec-2018-2020-mmd-au-7-78";
var VfBankCoinUrl = "https://www.vfbank.ru/fizicheskim-licam/monety/";
var RshbCoinUrl = "https://www.rshb.ru/natural/coins/";
var RicGoldMMD = "https://www.ricgold.com/shop/investitsionnye-monety-6/zolotaya--moneta-georgij-pobedonosets-mmd-2006-2020-gg-388/";
var RicGoldSPMD = "https://www.ricgold.com/shop/investitsionnye-monety-6/zolotaya-moneta-georgij-pobedonosets-spmd-2006-2021-gg-1830/";
var Site9999d = "https://9999d.ru/";
var LantaRuCoinsUrl = "https://lanta.ru/metals/coins/zolotie-monety/";
var CoinsTsbnkSPMD = "https://coins.tsbnk.ru/katalog/rossiyskie/investitsionnaya-rossiyskaya-moneta-georgiy-pobedonosets-spmd-50-rub-2018-2019-gg-zoloto-7-78-gr-spm/";
var CoinsTsbnkMMD = "https://coins.tsbnk.ru/katalog/rossiyskie/investitsionnaya-rossiyskaya-moneta-2018-georgiy-pobedonosets-mmd-50-rub-2018-g-v-zoloto-7-78-gr-mmd/";
var ZolotoyDvorCoinUrl = "https://www.zolotoydvor.ru/Zolotye-monety-Rossii_100g.html";
var MkbRu = "https://mkb.ru/coins";



function loadTicker() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": 'https://goldtech.space/GoldTech-CoinsParser/api/v1/?mode=getlastcurrencies',
        "method": "GET"
    };

    jQuery.ajax(settings).done(function (response) {
    
        jQuery("#gold-span_1").text('$ ' + response.find(x => x.Acronim == "GOLD").Price);
        jQuery("#gold-span_2").text('$ ' + response.find(x => x.Acronim == "GOLD").Price);
        jQuery("#gold-span_3").text('$ ' + response.find(x => x.Acronim == "GOLD").Price);


        jQuery("#silver-span_1").text('$ ' + response.find(x => x.Acronim == "SILV").Price);
        jQuery("#silver-span_2").text('$ ' + response.find(x => x.Acronim == "SILV").Price);
        jQuery("#silver-span_3").text('$ ' + response.find(x => x.Acronim == "SILV").Price);

        jQuery("#platinum-span_2").text('$ ' + response.find(x => x.Acronim == "PLT").Price);
        jQuery("#platinum-span_1").text('$ ' + response.find(x => x.Acronim == "PLT").Price);
        jQuery("#platinum-span_3").text('$ ' + response.find(x => x.Acronim == "PLT").Price);

        jQuery("#usd-span_1").html(response.find(x => x.Acronim == "USDtoRUB").Price + " руб.");
        jQuery("#usd-span_2").html(response.find(x => x.Acronim == "USDtoRUB").Price + " руб.");
        jQuery("#usd-span_3").html(response.find(x => x.Acronim == "USDtoRUB").Price + " руб.");

        jQuery("#eur-span_1").html(response[1].Price + " руб.");
        jQuery("#eur-span_2").html(response[1].Price + " руб.");
        jQuery("#eur-span_3").html(response[1].Price + " руб.");

        var usd_arrow = response.find(x => x.Acronim == "USDtoRUB").IsUp;
        var eur_arrow = response.find(x => x.Acronim == "EURtoRUB").IsUp;
        var xau_arrow = response.find(x => x.Acronim == "GOLD").IsUp;
        var pl_arrow = response.find(x => x.Acronim == "PLT").IsUp;
        var xag_arrow = response.find(x => x.Acronim == "SILV").IsUp;

        function tickerArrow(str) {
            if (str == true) {
                return "↑";
            }
            if (str == false) {
                return "↓";
            }
            if (str == null) {
                return " ";
            }
        }

        jQuery(".exchange__item-arrow-gold").html(tickerArrow(xau_arrow));
        jQuery(".exchange__item-arrow-eur").html(tickerArrow(eur_arrow));
        jQuery(".exchange__item-arrow-platinum").html(tickerArrow(pl_arrow));
        jQuery(".exchange__item-arrow-usd").html(tickerArrow(usd_arrow));
        jQuery(".exchange__item-arrow-silver").html(tickerArrow(xag_arrow));

    });
}

function loadCoinsRates() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": 'https://goldtech.space/GoldTech-CoinsParser/api/v1/?mode=getlastcoins',
        "method": "GET"
    };

    jQuery.ajax(settings).done(function (response) {
        // московский монетный двор
        try{
            jQuery("#zoloto-md-sell-gpm").text(response.find(x => x.Site == ZolotoMDMMD && x.Acronim == "GPM").Sell);
            jQuery("#zoloto-md-buy-gpm").text(response.find(x => x.Site == ZolotoMDMMD && x.Acronim == "GPM").Buy);
            jQuery("#zoloto-md-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == ZolotoMDMMD && x.Acronim == "GPM").ParseDate));
            jQuery("#zoloto-md-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == ZolotoMDMMD && x.Acronim == "GPM").IsUp));
        }catch(e){
            console.log(e);
        }
        

    try{
        jQuery("#zolotoy-zapas-sell-gpm").text(response.find(x => x.Site == ZolotoyZapasMMD && x.Acronim == "GPM").Sell);
        jQuery("#zolotoy-zapas-buy-gpm").text(response.find(x => x.Site == ZolotoyZapasMMD && x.Acronim == "GPM").Buy);
        jQuery("#zolotoy-zapas-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == ZolotoyZapasMMD && x.Acronim == "GPM").ParseDate));
        jQuery("#zolotoy-zapas-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == ZolotoyZapasMMD && x.Acronim == "GPM").IsUp));

    }catch(e){
        
    }

    try{
        jQuery("#zolotoydvor-sell-gpm").text(response.find(x => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPM").Sell);
        jQuery("#zolotoydvor-buy-gpm").text(response.find(x => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPM").Buy);
        jQuery("#zolotoydvor-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPM").ParseDate));
        jQuery("#zolotoydvor-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#zolotoy-club-sell-gpm").text(response.find(x => x.Site == ZolotoyClub && x.Acronim == "GPM").Sell);
        jQuery("#zolotoy-club-buy-gpm").text(response.find(x => x.Site == ZolotoyClub && x.Acronim == "GPM").Buy);
        jQuery("#zolotoy-club-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == ZolotoyClub && x.Acronim == "GPM").ParseDate));
        jQuery("#zolotoy-club-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == ZolotoyClub && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }
        
    try{
        jQuery("#vfbank-sell-gpm").text(response.find(x => x.Site == VfBankCoinUrl && x.Acronim == "GPM").Sell);
        jQuery("#vfbank-buy-gpm").text(response.find(x => x.Site == VfBankCoinUrl && x.Acronim == "GPM").Buy);
        jQuery("#vfbank-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == VfBankCoinUrl && x.Acronim == "GPM").ParseDate));
        jQuery("#vfbank-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == VfBankCoinUrl && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }
    
    try{
        jQuery("#rshb-sell-gpm").text(response.find(x => x.Site == RshbCoinUrl && x.Acronim == "GPM").Sell);
        jQuery("#rshb-buy-gpm").text(response.find(x => x.Site == RshbCoinUrl && x.Acronim == "GPM").Buy);
        jQuery("#rshb-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == RshbCoinUrl && x.Acronim == "GPM").ParseDate));
        jQuery("#rshb-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == RshbCoinUrl && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#sberbank-sell-gpm").text(response.find(x => x.Site == SberbankCoinUrl && x.Acronim == "GPM").Sell);
        jQuery("#sberbank-buy-gpm").text(response.find(x => x.Site == SberbankCoinUrl && x.Acronim == "GPM").Buy);
        jQuery("#sberbank-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == SberbankCoinUrl && x.Acronim == "GPM").ParseDate));
        jQuery("#sberbank-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == SberbankCoinUrl && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#ricgold-sell-gpm").text(response.find(x => x.Site == RicGoldMMD && x.Acronim == "GPM").Sell);
        jQuery("#ricgold-buy-gpm").text(response.find(x => x.Site == RicGoldMMD && x.Acronim == "GPM").Buy);
        jQuery("#ricgold-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == RicGoldMMD && x.Acronim == "GPM").ParseDate));
        jQuery("#ricgold-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == RicGoldMMD && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#monetainvest-sell-gpm").text(response.find(x => x.Site == MonetaInvestMMD && x.Acronim == "GPM").Sell);
        jQuery("#monetainvest-buy-gpm").text(response.find(x => x.Site == MonetaInvestMMD && x.Acronim == "GPM").Buy);
        jQuery("#monetainvest-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == MonetaInvestMMD && x.Acronim == "GPM").ParseDate));
        jQuery("#monetainvest-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == MonetaInvestMMD && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }
    
    try{
        jQuery("#lanta-sell-gpm").text(response.find(x => x.Site == LantaRuCoinsUrl && x.Acronim == "GPM").Sell);
        jQuery("#lanta-buy-gpm").text(response.find(x => x.Site == LantaRuCoinsUrl && x.Acronim == "GPM").Buy);
        jQuery("#lanta-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == LantaRuCoinsUrl && x.Acronim == "GPM").ParseDate));
        jQuery("#lanta-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == LantaRuCoinsUrl && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#tsbnk-sell-gpm").text(response.find(x => x.Site == CoinsTsbnkMMD && x.Acronim == "GPM").Sell);
        jQuery("#tsbnk-buy-gpm").text(response.find(x => x.Site == CoinsTsbnkMMD && x.Acronim == "GPM").Buy);
        jQuery("#tsbnk-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == CoinsTsbnkMMD && x.Acronim == "GPM").ParseDate));
        jQuery("#tsbnk-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == CoinsTsbnkMMD && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }    
   
    try{
        jQuery("#9999d-sell-gpm").text(response.find(x => x.Site == Site9999d && x.Acronim == "GPM").Sell);
        jQuery("#9999d-buy-gpm").text(response.find(x => x.Site == Site9999d && x.Acronim == "GPM").Buy);
        jQuery("#9999d-date-gpm").text(CoinsRatesDateFormat(response.find(x => x.Site == Site9999d && x.Acronim == "GPM").ParseDate));
        jQuery("#9999d-sell-gpm-arrow").text(coinsRatesArrow(response.find(x => x.Site == Site9999d && x.Acronim == "GPM").IsUp));
    }catch(e){
        
    }
    
    // Санкт-Петербургский Монетный Двор
    try{
        jQuery("#zoloto-md-sell-gps").text(response.find(x => x.Site == ZolotoMDSPMD && x.Acronim == "GPS").Sell);
        jQuery("#zoloto-md-buy-gps").text(response.find(x => x.Site == ZolotoMDSPMD && x.Acronim == "GPS").Buy);
        jQuery("#zoloto-md-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == ZolotoMDSPMD && x.Acronim == "GPS").ParseDate));
        jQuery("#zoloto-md-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == ZolotoMDSPMD && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }

        
    try{
        jQuery("#zolotoy-zapas-sell-gps").text(response.find(x => x.Site == ZolotoyZapasSPMD && x.Acronim == "GPS").Sell);
        jQuery("#zolotoy-zapas-buy-gps").text(response.find(x => x.Site == ZolotoyZapasSPMD && x.Acronim == "GPS").Buy);
        jQuery("#zolotoy-zapas-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == ZolotoyZapasSPMD && x.Acronim == "GPS").ParseDate));
        jQuery("#zolotoy-zapas-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == ZolotoyZapasSPMD && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#zolotoydvor-sell-gps").text(response.find(x => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPS").Sell);
        jQuery("#zolotoydvor-buy-gps").text(response.find(x => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPS").Buy);
        jQuery("#zolotoydvor-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPS").ParseDate));
        jQuery("#zolotoydvor-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#zolotoy-club-sell-gps").text(response.find(x => x.Site == ZolotoyClub && x.Acronim == "GPS").Sell);
        jQuery("#zolotoy-club-buy-gps").text(response.find(x => x.Site == ZolotoyClub && x.Acronim == "GPS").Buy);
        jQuery("#zolotoy-club-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == ZolotoyClub && x.Acronim == "GPS").ParseDate));
        jQuery("#zolotoy-club-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == ZolotoyClub && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#vfbank-sell-gps").text(response.find(x => x.Site == VfBankCoinUrl && x.Acronim == "GPS").Sell);
        jQuery("#vfbank-buy-gps").text(response.find(x => x.Site == VfBankCoinUrl && x.Acronim == "GPS").Buy);
        jQuery("#vfbank-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == VfBankCoinUrl && x.Acronim == "GPS").ParseDate));
        jQuery("#vfbank-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == VfBankCoinUrl && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#rshb-sell-gps").text(response.find(x => x.Site == RshbCoinUrl && x.Acronim == "GPS").Sell);
        jQuery("#rshb-buy-gps").text(response.find(x => x.Site == RshbCoinUrl && x.Acronim == "GPS").Buy);
        jQuery("#rshb-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == RshbCoinUrl && x.Acronim == "GPS").ParseDate));
        jQuery("#rshb-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == RshbCoinUrl && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }
        
    try{
        jQuery("#sberbank-sell-gps").text(response.find(x => x.Site == SberbankCoinUrl && x.Acronim == "GPS").Sell);
        jQuery("#sberbank-buy-gps").text(response.find(x => x.Site == SberbankCoinUrl && x.Acronim == "GPS").Buy);
        jQuery("#sberbank-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == SberbankCoinUrl && x.Acronim == "GPS").ParseDate));
        jQuery("#sberbank-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == SberbankCoinUrl && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#ricgold-sell-gps").text(response.find(x => x.Site == RicGoldSPMD && x.Acronim == "GPS").Sell);
        jQuery("#ricgold-buy-gps").text(response.find(x => x.Site == RicGoldSPMD && x.Acronim == "GPS").Buy);
        jQuery("#ricgold-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == RicGoldSPMD && x.Acronim == "GPS").ParseDate));
        jQuery("#ricgold-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == RicGoldSPMD && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#monetainvest-sell-gps").text(response.find(x => x.Site == "https://msk.monetainvest.ru/" && x.Acronim == "GPS").Sell);
        jQuery("#monetainvest-buy-gps").text(response.find(x => x.Site == "https://msk.monetainvest.ru/" && x.Acronim == "GPS").Buy);
        jQuery("#monetainvest-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == "https://msk.monetainvest.ru/" && x.Acronim == "GPS").ParseDate));
        jQuery("#monetainvest-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == "https://msk.monetainvest.ru/" && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#lanta-sell-gps").text(response.find(x => x.Site == LantaRuCoinsUrl && x.Acronim == "GPS").Sell);
        jQuery("#lanta-buy-gps").text(response.find(x => x.Site == LantaRuCoinsUrl && x.Acronim == "GPS").Buy);
        jQuery("#lanta-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == LantaRuCoinsUrl && x.Acronim == "GPS").ParseDate));
        jQuery("#lanta-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == LantaRuCoinsUrl && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }

    try{
        jQuery("#tsbnk-sell-gps").text(response.find(x => x.Site == CoinsTsbnkSPMD && x.Acronim == "GPS").Sell);
        jQuery("#tsbnk-buy-gps").text(response.find(x => x.Site == CoinsTsbnkSPMD && x.Acronim == "GPS").Buy);
        jQuery("#tsbnk-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == CoinsTsbnkSPMD && x.Acronim == "GPS").ParseDate));
        jQuery("#tsbnk-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == CoinsTsbnkSPMD && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }
        
    try{
        jQuery("#9999d-sell-gps").text(response.find(x => x.Site == Site9999d && x.Acronim == "GPS").Sell);
        jQuery("#9999d-buy-gps").text(response.find(x => x.Site == Site9999d && x.Acronim == "GPS").Buy);
        jQuery("#9999d-date-gps").text(CoinsRatesDateFormat(response.find(x => x.Site == Site9999d && x.Acronim == "GPS").ParseDate));
        jQuery("#9999d-sell-gps-arrow").text(coinsRatesArrow(response.find(x => x.Site == Site9999d && x.Acronim == "GPS").IsUp));
    }catch(e){
        
    }
          

        function coinsRatesArrow(str) {
            if (str == true) {
                return "↑";
            }
            if (str == false) {
                return "↓";
            }
            else {
                return "";
            }
        }

        jQuery('.coins-rates__sell span').each(function () {
            if (jQuery(this).text() == '0' || jQuery(this).text() == '—') {
                jQuery(this).parent().parent().find('.coins-rates__available').text("Нет в наличие").css('color', 'gray');
            }
        });

        function CoinsRatesDateFormat(str) {
            var date = new Date(str);
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;

            return day + "." + month + " " + hours + ":" + minutes;
        }

    });
}

function filterOpen() {
    console.log("function filterOpen");
    var widgetArea = document.getElementById( 'moneta_shop_widget-area' );
    var trigger = document.getElementById( 'moneta_shop_widget-area__trigger' );
  
    if ( ! widgetArea ) {
      return;
    }
  
    trigger.addEventListener('click', function() {
      // trigger.preventDefault();
      widgetArea.classList.toggle( 'active' );
    } );
  };

jQuery(document).ready(function(){
    loadTicker();
    filterOpen();
//   Добавить проверку чтобы запускалась только на странице статистика
    loadCoinsRates();
});