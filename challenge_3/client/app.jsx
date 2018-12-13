import {Form1, Form2} from './Forms.js';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			page: 0,
			user: {
				name: null,
				email: null,
				password: null
			},
			ship: {
				address: {
					line1: null,
					line2: null,
					city: null,
					state: null,
					zipcode: null
				},
				phoneNumber: null
			},
			card: {
				number: null,
				expiry: null,
				CVV: null,
				zipcode: null
			}
		};
	}

	clickForward() {
		let now = this.state.page;
		let next = (now !== 4) ? now + 1 : 0; //Loop back
		this.setState({page: this.state.page + 1});
	}

	getData(e) {
		let url;
		if (e.target.value === 'checkout') {
			url = '/form1'; //some other attribute? custom?
		} else {
			url = '/confirm';
		}
		fetch(url, {
			method: 'GET'
		})
			.then(res => {
				console.log('successful post', res.text());
				console.log(res);
				this.clickForward();
			})
			.catch(err => {
				console.log('failed to post');
			});
	}

	postData(e) {
		let form = document.getElementsByTagName('form')[0];
		let data = new FormData(form);
		console.log(form);
		fetch(form.action, {
			method: 'POST',
			body: data
		})
			.then(res => {
				console.log('successful post', res.text());
				this.clickForward();
			})
			.catch(err => {
				console.log('failed to post');
			});
	}

	getPage(page) {
		if (page === 0) {
			return <Homepage onClickHandler={this.getData.bind(this)}/>;
		} else if (page === 1) {
			return <Form1 onClickHandler={this.postData.bind(this)}/>
		} else if (page === 2) {
			return <ConfirmPage />;
		}
	}

	render() {
		let page = this.getPage(this.state.page);
		
		return (
			<div>
				<h1>Challenge 3</h1>
				{page}
			</div>
			);
	}
}

let Homepage = ({onClickHandler}) => (
	<button value='checkout' onClick={onClickHandler}>
		Checkout
	</button>
);

let ConfirmPage = () => (
	<div>
		<div>Data here</div>
		<input type="button" value="Purchase" />
	</div>
);





ReactDOM.render(<App />, document.getElementById('app'));

