import React from 'react';
import styles from '../index.css';

class BuilingList extends React.Component {

	tappedBuilding = (building) => {
		var selectedUpdate = this.props.selectedUpdate;
		console.log(building.name + ' ID: ' + building.id);
		selectedUpdate(building.id);
	}

	render() {
		// console.log('This is my directory file', this.props.data);
		const { data, filter } = this.props;
		var input = filter.toLowerCase();

		const buildingList = data.filter((building, i) => {
				// Filter by name
				var name = data[i].name.toLowerCase();
				return (name.indexOf(input) !== -1);
	    }).map(listing => {
			return (
				<tr key={listing.id} >
					<div className="listing">
						<td>{listing.code} </td>
						<td onClick={()=>this.tappedBuilding(listing)}> {listing.name} </td>
					</div>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
