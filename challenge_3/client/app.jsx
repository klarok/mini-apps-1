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

	postData() {
		let form = document.getElementById('form');
		let data = new FormData(form);
		fetch(form.action, {
			method: 'POST',
			body: data
		})
			.then(res => {
				console.log('successful post', res.text());
			})
			.catch(err => {
				console.log('failed to post');
			});
	}

	getPage(page) {
		if (page === 0) {
			return <Homepage onClickHandler={this.clickForward.bind(this)}/>;
		} else if (page === 1) {
			return <Form1 onClickHandler={this.clickForward.bind(this)}/>
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
	<button onClick={onClickHandler}>
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

