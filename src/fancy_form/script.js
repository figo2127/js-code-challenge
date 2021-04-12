var form = document.getElementById("form")	
var btc_address = document.getElementById("input-address");
var amount = document.getElementById("input-amount");
var otp = document.getElementById('input-otp')

function handleSubmit() {
	form = document.getElementById("form")	
	btc_address = document.getElementById("input-address");
	amount = document.getElementById("input-amount");
	otp = document.getElementById('input-otp')
	if (form != null) {
		form.addEventListener('submit', (e) => {
			e.preventDefault()
		
			checkInputs();
		})
	}
}

function checkInputs() {
	const btc_addressVal = btc_address.value.trim();
	const amountVal = amount.value.trim();
	const otpVal = otp.value.trim();

	if (btc_addressVal === '') {
		setErrorFor(btc_address, 'BTC Address cannot be blank')
	} else {
		setSuccessFor(btc_address)
	}
	if (amountVal === '') {
		setErrorFor(amount, 'Amount to send cannot be blank')
	} else {
		setSuccessFor(amount)
	}
	if (otpVal === '') {
		setErrorFor(otp, 'OTP cannot be blank')
	} else {
		setSuccessFor(otp)
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}