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

jQuery(document).ready(function(){
    loadTicker();
});