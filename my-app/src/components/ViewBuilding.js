import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		const { data, building } = this.props;
		var tmp = data[building];

		return (
			<div>
				<h3>More Information</h3>
				<p>
					<tr key={tmp.id} >
					<tr>CODE: {tmp.code}</tr>
					<tr>NAME: {tmp.name}</tr>
					<tr>ADDRESS: {tmp.address}</tr>
					<tr>LAT: {tmp.coordinates["latitude"]}</tr>
					<tr>LNG: {tmp.coordinates["longitude"]}</tr>
					</tr>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
