import React from 'react';

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
				var name = data[i].name.toLowerCase();
				return (name.indexOf(input) !== -1);
	    }).map(directory => {
			return (
				<tr key={directory.id} >
					<td>{directory.code} </td>
					<td onClick={()=>this.tappedBuilding(directory)}> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
