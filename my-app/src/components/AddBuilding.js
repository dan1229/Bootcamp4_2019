import React from 'react';

class AddBuilding extends React.Component {

	mySubmitHandler = (event) => {
    event.preventDefault();
		let name = this.state.name;
		let code = this.state.code;
		let address = this.state.address;

    alert("You are submitting " + name);

		let data = this.props.data;
		let id = data.length;
		data.push({
			"id": id,
			"code": code,
			"name": name,
			"address": address
		});
		// console.log('This is my directory file', data);
	}

	myChangeHandler = (event) => {
		let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
	}

	render() {
		return (
			<div className="card">
				<form onSubmit={this.mySubmitHandler}>
		      <h3>Add Building</h3>
					<div class="row">
						<p>Enter place name:</p>
			      <input
			        type='text'
							name='name'
							required
			        onChange={this.myChangeHandler}
			      />
					</div>
					<div class="row">
						<p>Enter place code:</p>
			      <input
			        type='text'
							name='code'
							required
			        onChange={this.myChangeHandler}
			      />
					</div>
					<div class="row">
						<p>Enter place address:</p>
			      <input
			        type='text'
							name='address'
							required
			        onChange={this.myChangeHandler}
			      />
					</div>
					<input
		        type='submit'
		      />
	      </form>
			</div>
		);
	}
}
export default AddBuilding;
