import React from 'react';

class RemoveBuilding extends React.Component {

	mySubmitHandler = (event) => {
    event.preventDefault();
		let code = this.state.code;
		let data = this.props.data;
		let res = data.filter(obj => { // See if code is in list
		  return obj['code'] === code
		});

		if(res.length === 0) { // Code doesn't exist
			alert("Listing with code " + code + " not found.");
		} else { // Code exists -> delete
			alert("You are removing " + res[0]["name"]);
			let index = data.findIndex(obj => {
			  return obj['code'] === code
			});
			data.splice(index, 1);
		}
	}

	myChangeHandler = (event) => {
		let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
	}

	render() {
		return (
			<form onSubmit={this.mySubmitHandler}>
	      <h3>Remove Building</h3>
				<div class="row">
				<div class="row">
					<p>Enter place code:</p>
		      <input
		        type='text'
						name='code'
		        onChange={this.myChangeHandler}
		      />
				</div>
				</div>
				<input
	        type='submit'
	      />
      </form>
		);
	}
}
export default RemoveBuilding;
