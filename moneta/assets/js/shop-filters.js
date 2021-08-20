function filterOpen() {
    console.log("function filterOpen");
    var widgetArea = document.getElementById('moneta_shop_widget-area');
    var trigger = document.getElementById('moneta_shop_widget-area__trigger');

    if (!widgetArea) {
        return;
    }

    trigger.addEventListener('click', function () {
        // trigger.preventDefault();
        widgetArea.classList.toggle('active');
    });
};
document.addEventListener("DOMContentLoaded", filterOpen);