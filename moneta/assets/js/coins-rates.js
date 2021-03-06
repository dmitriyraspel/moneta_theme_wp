var SberbankCoinUrl =
  "https://www.sberbank.ru/proxy/services/coin-catalog/coins/5216-0060?region=38&condition=1";
var TkbbankCoinUrl =
  "https://www.tkbbank.ru/private/savings/metal_accounts/coin/";
var ZolotoyZapasSPMD =
  "https://www.zolotoy-zapas.ru/coins-price/georgiy-pobedonosets-gold-quarter-oz-bullion-coin-spmd-russia/";
var ZolotoyZapasMMD =
  "https://www.zolotoy-zapas.ru/coins-price/georgiy-pobedonosets-gold-coin-quarter-oz/";
var ZolotoyZapasGP100 =
  "https://www.zolotoy-zapas.ru/coins-price/georgiy-pobedonosets-100-rub-gold-half-of-ounce-bullion-coin-2021-spmd-russia/";
var ZolotoyClub = "https://www.zolotoy-club.ru/";
var ZolotoMDSPMD =
  "https://zoloto-md.ru/bullion-coins/i-rossiya-i-sssr/zolotaya-investiczionnaya-moneta-georgij-pobedonosecz-mmd,-7,78-g-chistogo-zolota-proba-0,999";
var ZolotoMDMMD =
  "https://zoloto-md.ru/bullion-coins/i-rossiya-i-sssr/zolotaya-moneta-georgij-pobedonosecz-kupit-czena-investiczionnoj-monetyi-pobedonosecz-nominalom-50-rublej";
var MonetaInvestSPMD =
  "https://monetainvest.ru/50-rublej-georgij-pobedonosec-2020-spmd-au-7-78";
var MonetaInvestMMD =
  "https://monetainvest.ru/50-rublej-georgij-pobedonosec-2018-2020-mmd-au-7-78";
var VfBankCoinUrl = "https://www.vfbank.ru/fizicheskim-licam/monety/";
var RshbCoinUrl = "https://www.rshb.ru/natural/coins/";
var RicGoldMMD =
  "https://www.ricgold.com/shop/investitsionnye-monety-6/zolotaya--moneta-georgij-pobedonosets-mmd-2006-2020-gg-388/";
var RicGoldSPMD =
  "https://www.ricgold.com/shop/investitsionnye-monety-6/zolotaya-moneta-georgij-pobedonosets-spmd-2006-2021-gg-1830/";
var Site9999d = "https://9999d.ru/";
var LantaRuCoinsUrl = "https://lanta.ru/metals/coins/zolotie-monety/";
var CoinsTsbnkSPMD =
  "https://coins.tsbnk.ru/katalog/rossiyskie/investitsionnaya-rossiyskaya-moneta-georgiy-pobedonosets-spmd-50-rub-2018-2019-gg-zoloto-7-78-gr-spm/";
var CoinsTsbnkMMD =
  "https://coins.tsbnk.ru/katalog/rossiyskie/investitsionnaya-rossiyskaya-moneta-2018-georgiy-pobedonosets-mmd-50-rub-2018-g-v-zoloto-7-78-gr-mmd/";
var ZolotoyDvorCoinUrl =
  "https://www.zolotoydvor.ru/Zolotye-monety-Rossii_100g.html";
var MkbRu = "https://mkb.ru/coins";

function loadCoinsRates() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://goldtech.space/GoldTech-CoinsParser/api/v1/?mode=getlastcoins",
    method: "GET",
  };

  jQuery.ajax(settings).done(function (response) {
    // ???????????????????? ???????????????? ????????
    try {
      jQuery("#zoloto-md-sell-gpm").text(
        response.find((x) => x.Site == ZolotoMDMMD && x.Acronim == "GPM").Sell
      );
      jQuery("#zoloto-md-buy-gpm").text(
        response.find((x) => x.Site == ZolotoMDMMD && x.Acronim == "GPM").Buy
      );
      jQuery("#zoloto-md-date-gpm").text(
        response.find((x) => x.Site == ZolotoMDMMD && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#zoloto-md-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == ZolotoMDMMD && x.Acronim == "GPM").IsUp
        )
      );
    } catch (e) {
      console.log(e);
    }

    try {
      jQuery("#zolotoy-zapas-sell-gpm").text(
        response.find((x) => x.Site == ZolotoyZapasMMD && x.Acronim == "GPM")
          .Sell
      );
      jQuery("#zolotoy-zapas-buy-gpm").text(
        response.find((x) => x.Site == ZolotoyZapasMMD && x.Acronim == "GPM")
          .Buy
      );
      jQuery("#zolotoy-zapas-date-gpm").text(
        response.find((x) => x.Site == ZolotoyZapasMMD && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#zolotoy-zapas-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == ZolotoyZapasMMD && x.Acronim == "GPM")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#zolotoydvor-sell-gpm").text(
        response.find((x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPM")
          .Sell
      );
      jQuery("#zolotoydvor-buy-gpm").text(
        response.find((x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPM")
          .Buy
      );
      jQuery("#zolotoydvor-date-gpm").text(
        response.find((x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#zolotoydvor-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find(
            (x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPM"
          ).IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#zolotoy-club-sell-gpm").text(
        response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GPM").Sell
      );
      jQuery("#zolotoy-club-buy-gpm").text(
        response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GPM").Buy
      );
      jQuery("#zolotoy-club-date-gpm").text(
        response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#zolotoy-club-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GPM").IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#vfbank-sell-gpm").text(
        response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GPM").Sell
      );
      jQuery("#vfbank-buy-gpm").text(
        response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GPM").Buy
      );
      jQuery("#vfbank-date-gpm").text(
        response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#vfbank-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GPM")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#rshb-sell-gpm").text(
        response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GPM").Sell
      );
      jQuery("#rshb-buy-gpm").text(
        response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GPM").Buy
      );
      jQuery("#rshb-date-gpm").text(
        response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#rshb-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GPM").IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#sberbank-sell-gpm").text(
        response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GPM")
          .Sell
      );
      jQuery("#sberbank-buy-gpm").text(
        response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GPM")
          .Buy
      );
      jQuery("#sberbank-date-gpm").text(
        response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#sberbank-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GPM")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#ricgold-sell-gpm").text(
        response.find((x) => x.Site == RicGoldMMD && x.Acronim == "GPM").Sell
      );
      jQuery("#ricgold-buy-gpm").text(
        response.find((x) => x.Site == RicGoldMMD && x.Acronim == "GPM").Buy
      );
      jQuery("#ricgold-date-gpm").text(
        response.find((x) => x.Site == RicGoldMMD && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#ricgold-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == RicGoldMMD && x.Acronim == "GPM").IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#monetainvest-sell-gpm").text(
        response.find((x) => x.Site == MonetaInvestMMD && x.Acronim == "GPM")
          .Sell
      );
      jQuery("#monetainvest-buy-gpm").text(
        response.find((x) => x.Site == MonetaInvestMMD && x.Acronim == "GPM")
          .Buy
      );
      jQuery("#monetainvest-date-gpm").text(
        response.find((x) => x.Site == MonetaInvestMMD && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#monetainvest-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == MonetaInvestMMD && x.Acronim == "GPM")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#lanta-sell-gpm").text(
        response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GPM")
          .Sell
      );
      jQuery("#lanta-buy-gpm").text(
        response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GPM")
          .Buy
      );
      jQuery("#lanta-date-gpm").text(
        response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#lanta-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GPM")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#tsbnk-sell-gpm").text(
        response.find((x) => x.Site == CoinsTsbnkMMD && x.Acronim == "GPM").Sell
      );
      jQuery("#tsbnk-buy-gpm").text(
        response.find((x) => x.Site == CoinsTsbnkMMD && x.Acronim == "GPM").Buy
      );
      jQuery("#tsbnk-date-gpm").text(
        response.find((x) => x.Site == CoinsTsbnkMMD && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#tsbnk-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == CoinsTsbnkMMD && x.Acronim == "GPM")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#9999d-sell-gpm").text(
        response.find((x) => x.Site == Site9999d && x.Acronim == "GPM").Sell
      );
      jQuery("#9999d-buy-gpm").text(
        response.find((x) => x.Site == Site9999d && x.Acronim == "GPM").Buy
      );
      jQuery("#9999d-date-gpm").text(
        response.find((x) => x.Site == Site9999d && x.Acronim == "GPM")
          .ParseDate
      );
      jQuery("#9999d-sell-gpm-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == Site9999d && x.Acronim == "GPM").IsUp
        )
      );
    } catch (e) {}

    // ??????????-?????????????????????????? ???????????????? ????????
    try {
      jQuery("#zoloto-md-sell-gps").text(
        response.find((x) => x.Site == ZolotoMDSPMD && x.Acronim == "GPS").Sell
      );
      jQuery("#zoloto-md-buy-gps").text(
        response.find((x) => x.Site == ZolotoMDSPMD && x.Acronim == "GPS").Buy
      );
      jQuery("#zoloto-md-date-gps").text(
        response.find((x) => x.Site == ZolotoMDSPMD && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#zoloto-md-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == ZolotoMDSPMD && x.Acronim == "GPS")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#zolotoy-zapas-sell-gps").text(
        response.find((x) => x.Site == ZolotoyZapasSPMD && x.Acronim == "GPS")
          .Sell
      );
      jQuery("#zolotoy-zapas-buy-gps").text(
        response.find((x) => x.Site == ZolotoyZapasSPMD && x.Acronim == "GPS")
          .Buy
      );
      jQuery("#zolotoy-zapas-date-gps").text(
        response.find((x) => x.Site == ZolotoyZapasSPMD && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#zolotoy-zapas-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == ZolotoyZapasSPMD && x.Acronim == "GPS")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#zolotoydvor-sell-gps").text(
        response.find((x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPS")
          .Sell
      );
      jQuery("#zolotoydvor-buy-gps").text(
        response.find((x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPS")
          .Buy
      );
      jQuery("#zolotoydvor-date-gps").text(
        response.find((x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#zolotoydvor-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find(
            (x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GPS"
          ).IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#zolotoy-club-sell-gps").text(
        response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GPS").Sell
      );
      jQuery("#zolotoy-club-buy-gps").text(
        response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GPS").Buy
      );
      jQuery("#zolotoy-club-date-gps").text(
        response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#zolotoy-club-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GPS").IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#vfbank-sell-gps").text(
        response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GPS").Sell
      );
      jQuery("#vfbank-buy-gps").text(
        response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GPS").Buy
      );
      jQuery("#vfbank-date-gps").text(
        response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#vfbank-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GPS")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#rshb-sell-gps").text(
        response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GPS").Sell
      );
      jQuery("#rshb-buy-gps").text(
        response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GPS").Buy
      );
      jQuery("#rshb-date-gps").text(
        response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#rshb-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GPS").IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#sberbank-sell-gps").text(
        response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GPS")
          .Sell
      );
      jQuery("#sberbank-buy-gps").text(
        response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GPS")
          .Buy
      );
      jQuery("#sberbank-date-gps").text(
        response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#sberbank-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GPS")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#ricgold-sell-gps").text(
        response.find((x) => x.Site == RicGoldSPMD && x.Acronim == "GPS").Sell
      );
      jQuery("#ricgold-buy-gps").text(
        response.find((x) => x.Site == RicGoldSPMD && x.Acronim == "GPS").Buy
      );
      jQuery("#ricgold-date-gps").text(
        response.find((x) => x.Site == RicGoldSPMD && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#ricgold-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == RicGoldSPMD && x.Acronim == "GPS").IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#monetainvest-sell-gps").text(
        response.find(
          (x) => x.Site == "https://msk.monetainvest.ru/" && x.Acronim == "GPS"
        ).Sell
      );
      jQuery("#monetainvest-buy-gps").text(
        response.find(
          (x) => x.Site == "https://msk.monetainvest.ru/" && x.Acronim == "GPS"
        ).Buy
      );
      jQuery("#monetainvest-date-gps").text(
        response.find(
          (x) => x.Site == "https://msk.monetainvest.ru/" && x.Acronim == "GPS"
        ).ParseDate
      );
      jQuery("#monetainvest-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find(
            (x) =>
              x.Site == "https://msk.monetainvest.ru/" && x.Acronim == "GPS"
          ).IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#lanta-sell-gps").text(
        response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GPS")
          .Sell
      );
      jQuery("#lanta-buy-gps").text(
        response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GPS")
          .Buy
      );
      jQuery("#lanta-date-gps").text(
        response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#lanta-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GPS")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#tsbnk-sell-gps").text(
        response.find((x) => x.Site == CoinsTsbnkSPMD && x.Acronim == "GPS")
          .Sell
      );
      jQuery("#tsbnk-buy-gps").text(
        response.find((x) => x.Site == CoinsTsbnkSPMD && x.Acronim == "GPS").Buy
      );
      jQuery("#tsbnk-date-gps").text(
        response.find((x) => x.Site == CoinsTsbnkSPMD && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#tsbnk-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == CoinsTsbnkSPMD && x.Acronim == "GPS")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#9999d-sell-gps").text(
        response.find((x) => x.Site == Site9999d && x.Acronim == "GPS").Sell
      );
      jQuery("#9999d-buy-gps").text(
        response.find((x) => x.Site == Site9999d && x.Acronim == "GPS").Buy
      );
      jQuery("#9999d-date-gps").text(
        response.find((x) => x.Site == Site9999d && x.Acronim == "GPS")
          .ParseDate
      );
      jQuery("#9999d-sell-gps-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == Site9999d && x.Acronim == "GPS").IsUp
        )
      );
    } catch (e) {}

    // ?????????????? ?????????????????????? 100 ???????????? (????????/??????)
    try {
      jQuery("#zoloto-md-sell-gp100").text(
        response.find((x) => x.Site == ZolotoMDMMD && x.Acronim == "GP100").Sell
      );
      jQuery("#zoloto-md-buy-gp100").text(
        response.find((x) => x.Site == ZolotoMDMMD && x.Acronim == "GP100").Buy
      );
      jQuery("#zoloto-md-date-gp100").text(
        response.find((x) => x.Site == ZolotoMDMMD && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#zoloto-md-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == ZolotoMDMMD && x.Acronim == "GP100")
            .IsUp
        )
      );
    } catch (e) {
      console.log(e);
    }

    try {
      jQuery("#zolotoy-zapas-sell-gp100").text(
        response.find((x) => x.Site == ZolotoyZapasMMD && x.Acronim == "GP100")
          .Sell
      );
      jQuery("#zolotoy-zapas-buy-gp100").text(
        response.find((x) => x.Site == ZolotoyZapasMMD && x.Acronim == "GP100")
          .Buy
      );
      jQuery("#zolotoy-zapas-date-gp100").text(
        response.find((x) => x.Site == ZolotoyZapasMMD && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#zolotoy-zapas-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find(
            (x) => x.Site == ZolotoyZapasMMD && x.Acronim == "GP100"
          ).IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#zolotoydvor-sell-gp100").text(
        response.find(
          (x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GP100"
        ).Sell
      );
      jQuery("#zolotoydvor-buy-gp100").text(
        response.find(
          (x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GP100"
        ).Buy
      );
      jQuery("#zolotoydvor-date-gp100").text(
        response.find(
          (x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GP100"
        ).ParseDate
      );
      jQuery("#zolotoydvor-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find(
            (x) => x.Site == ZolotoyDvorCoinUrl && x.Acronim == "GP100"
          ).IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#zolotoy-club-sell-gp100").text(
        response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GP100").Sell
      );
      jQuery("#zolotoy-club-buy-gp100").text(
        response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GP100").Buy
      );
      jQuery("#zolotoy-club-date-gp100").text(
        response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#zolotoy-club-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == ZolotoyClub && x.Acronim == "GP100")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#vfbank-sell-gp100").text(
        response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GP100")
          .Sell
      );
      jQuery("#vfbank-buy-gp100").text(
        response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GP100")
          .Buy
      );
      jQuery("#vfbank-date-gp100").text(
        response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#vfbank-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == VfBankCoinUrl && x.Acronim == "GP100")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#rshb-sell-gp100").text(
        response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GP100").Sell
      );
      jQuery("#rshb-buy-gp100").text(
        response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GP100").Buy
      );
      jQuery("#rshb-date-gp100").text(
        response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#rshb-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == RshbCoinUrl && x.Acronim == "GP100")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#sberbank-sell-gp100").text(
        response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GP100")
          .Sell
      );
      jQuery("#sberbank-buy-gp100").text(
        response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GP100")
          .Buy
      );
      jQuery("#sberbank-date-gp100").text(
        response.find((x) => x.Site == SberbankCoinUrl && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#sberbank-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find(
            (x) => x.Site == SberbankCoinUrl && x.Acronim == "GP100"
          ).IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#ricgold-sell-gp100").text(
        response.find((x) => x.Site == RicGoldMMD && x.Acronim == "GP100").Sell
      );
      jQuery("#ricgold-buy-gp100").text(
        response.find((x) => x.Site == RicGoldMMD && x.Acronim == "GP100").Buy
      );
      jQuery("#ricgold-date-gp100").text(
        response.find((x) => x.Site == RicGoldMMD && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#ricgold-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == RicGoldMMD && x.Acronim == "GP100")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#monetainvest-sell-gp100").text(
        response.find((x) => x.Site == MonetaInvestMMD && x.Acronim == "GP100")
          .Sell
      );
      jQuery("#monetainvest-buy-gp100").text(
        response.find((x) => x.Site == MonetaInvestMMD && x.Acronim == "GP100")
          .Buy
      );
      jQuery("#monetainvest-date-gp100").text(
        response.find((x) => x.Site == MonetaInvestMMD && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#monetainvest-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find(
            (x) => x.Site == MonetaInvestMMD && x.Acronim == "GP100"
          ).IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#lanta-sell-gp100").text(
        response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GP100")
          .Sell
      );
      jQuery("#lanta-buy-gp100").text(
        response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GP100")
          .Buy
      );
      jQuery("#lanta-date-gp100").text(
        response.find((x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#lanta-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find(
            (x) => x.Site == LantaRuCoinsUrl && x.Acronim == "GP100"
          ).IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#tsbnk-sell-gp100").text(
        response.find((x) => x.Site == CoinsTsbnkMMD && x.Acronim == "GP100")
          .Sell
      );
      jQuery("#tsbnk-buy-gp100").text(
        response.find((x) => x.Site == CoinsTsbnkMMD && x.Acronim == "GP100")
          .Buy
      );
      jQuery("#tsbnk-date-gp100").text(
        response.find((x) => x.Site == CoinsTsbnkMMD && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#tsbnk-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == CoinsTsbnkMMD && x.Acronim == "GP100")
            .IsUp
        )
      );
    } catch (e) {}

    try {
      jQuery("#9999d-sell-gp100").text(
        response.find((x) => x.Site == Site9999d && x.Acronim == "GP100").Sell
      );
      jQuery("#9999d-buy-gp100").text(
        response.find((x) => x.Site == Site9999d && x.Acronim == "GP100").Buy
      );
      jQuery("#9999d-date-gp100").text(
        response.find((x) => x.Site == Site9999d && x.Acronim == "GP100")
          .ParseDate
      );
      jQuery("#9999d-sell-gp100-arrow").text(
        coinsRatesArrow(
          response.find((x) => x.Site == Site9999d && x.Acronim == "GP100").IsUp
        )
      );
    } catch (e) {}
    ///

    function coinsRatesArrow(str) {
      if (str == true) {
        return "???";
      }
      if (str == false) {
        return "???";
      } else {
        return "";
      }
    }

    jQuery(".coins-rates__sell span").each(function () {
      if (jQuery(this).text() == "0" || jQuery(this).text() == "???") {
        jQuery(this)
          .parent()
          .parent()
          .find(".coins-rates__available")
          .text("?????? ?? ??????????????")
          .css("color", "gray");
      }
    });
  });
}

function TreshFuctDateFormatter() {
  var date = new Date(str);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  console.log(str);
  console.log(date);
  return day + "." + month + " " + hours + ":" + minutes;
}

jQuery(document).ready(function () {
  //   ???????????????? ???????????????? ?????????? ?????????????????????? ???????????? ???? ???????????????? ????????????????????
  loadCoinsRates();
});
