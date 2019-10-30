import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		const { data, building } = this.props;
		var tmp = data[building];
		let coordinates, top, id;

		// check if listing is valid
		try {
			top = <div>
				<tr>CODE: {tmp.code}</tr>
				<tr>NAME: {tmp.name}</tr>
				<tr>ADDRESS: {tmp.address}</tr>
			</div>
			id = tmp['id'];
		} catch(err) {
			top = <div>
				<tr>CODE: "N/A"</tr>
				<tr>NAME: "N/A"</tr>
				<tr>ADDRESS: "N/A"</tr>
			</div>
			id = -1;
		}


		// check if coordinates is valid
		try {
			coordinates = <div>
				<tr>LAT: {tmp.coordinates["latitude"]}</tr>
				<tr>LNG: {tmp.coordinates["longitude"]}</tr>
			</div>
		}
		catch(err) {
			coordinates = <div>
				<tr>LAT: {"N/A"}</tr>
				<tr>LNG: {"N/A"}</tr>
			</div>
		}

		return (
			<div class="card">
          <h3>More Information</h3>
					<p>
						<tr key={id} >
							{top}
							{coordinates}
						</tr>
					</p>
			</div>
		);
	}
}
export default ViewBuilding;
