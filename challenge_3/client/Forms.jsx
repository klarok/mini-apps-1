let Forms = {};

let Form1 = ({onClickHandler}) => {
	return (
		<form name="user" id="user">
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
		<form name="address" id="address">
			<input type="text" 
				name="address_line1" id="address_line1" />
			<input type="text" 
				name="address_line2" id="address_line2" />
			<input type="password"
				name="address_city" id="address_city" />
			<input type="password"
				name="address_state" id="address_state" />
			<input type="password"
				name="address_zipcode" id="address_zipcode" />
			<input type="button"
				name="address_submit" id="address_submit" 
				onClick={onClickHandler} />
		</form>
		);
}

export {Form1, Form2};

