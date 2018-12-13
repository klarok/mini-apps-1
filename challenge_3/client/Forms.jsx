let Forms = {};

let Form1 = ({onClickHandler}) => {
	return (
		<form name="user" id="user" 
			action="/form1"
			encType="multipart/form-data">
			<input type="text" 
				name="user_name" id="user_name" />
			<input type="text" 
				name="user_email" id="user_email" />
			<input type="password"
				name="user_password" id="user_password" />
			<input type="button"
				name="user_submit" id="user_submit" 
				onClick={onClickHandler} />
		</form>
		);
}

let Form2 = ({onClickHandler}) => { //Use fragments?
	return (
		<form name="address" id="address" 
			action="/form2"
			encType="multipart/form-data">
			<input type="text" 
				name="address_line1" id="address_line1" />
			<input type="text" 
				name="address_line2" id="address_line2" />
			<input type="text"
				name="address_city" id="address_city" />
			<input type="text"
				name="address_state" id="address_state" />
			<input type="text"
				name="address_zipcode" id="address_zipcode" />
			<input type="button"
				name="address_submit" id="address_submit" 
				onClick={onClickHandler} />
		</form>
		);
}

let Form3 = ({onClickHandler}) => {
	return (
		<form name="card" id="card" 
			action="/form3"
			encType="multipart/form-data">
			<input type="text" 
				name="card_number" id="card_number" />
			<input type="text" 
				name="card_expiry" id="card_expiry" />
			<input type="text" 
				name="card_CVV" id="card_CVV" />
			<input type="text" 
				name="card_zipcode" id="card_zipcode" />
			<input type="button"
				name="card_submit" id="card_submit" 
				onClick={onClickHandler} />
		</form>
		);
}

export {Form1, Form2, Form3};

