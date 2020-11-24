function readQR() {
	window.plugins.barcodeScanner.scan(function(result) {
		var text1 = result.text;

		if (text1 != "") {
			alert(text1);
		} else {
			alert("Scan abgebrochen");
		}

	}, function(error) {
		alert("Scan failed: " + error);
	});
}
