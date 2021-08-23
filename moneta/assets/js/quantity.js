function quantityBtn() {
  var btnsDown = document.querySelectorAll('.moneta-quantity-down');
  var btnsUp = document.querySelectorAll('.moneta-quantity-up');
  var updateBtn = document.querySelector (' [name="update_cart"] ');

  for (var i = 0; i < btnsDown.length; i++) {
    var btn = btnsDown[i];
    btn.addEventListener("click", function(e){
      var currentQuantity = e.currentTarget.parentElement;
    
      var input = currentQuantity.querySelector(".input-text");
      input.value = input.value > 1 ? input.value - 1 : 1;
      updateBtn.disabled = false;
    });
  }

  for (var i = 0; i < btnsUp.length; i++) {
    var btn = btnsUp[i];
    btn.addEventListener("click", function(e){
      var currentQuantity = e.currentTarget.parentElement;
    
      var input = currentQuantity.querySelector(".input-text");
      input.value = (Number(input.value) + 1);
      updateBtn.disabled = false;
    });
  }

}
document.addEventListener("DOMContentLoaded", quantityBtn);
