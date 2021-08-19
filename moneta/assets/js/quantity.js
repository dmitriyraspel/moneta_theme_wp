function quantityBtn() {
    var quantityBox = document.getElementsByClassName( 'quantity' );

    if ( quantityBox ) {
		console.log('quantityBtn');
	}

    var newBtnUp = document.createElement("div");
    newBtnUp.innerHTML = "+";
    document.body.insertBefore(newBtnUp, quantityBox);

};
quantityBtn();