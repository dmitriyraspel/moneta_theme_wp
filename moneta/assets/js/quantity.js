function quantityBtn() {
    var quantityBox = document.getElementsByClassName( 'quantity' ).getElementsByClassName( 'input-text' );
    var btnDown = document.querySelectorAll('moneta-quantity-down');
    var btnUp = document.querySelectorAll('moneta-quantity-up');

    if ( quantityBox ) {
		console.log('quantityBtn' . quantityBox);
	}

    var value = quantityBox.value;
    if ( value ) {
		console.log('value' . value);
	}
    

    // var newBtnUp = document.createElement("div");
    // newBtnUp.innerHTML = "+";
    // document.body.insertBefore(newBtnUp, quantityBox);

};
quantityBtn();