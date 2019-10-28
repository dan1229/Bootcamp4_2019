import React from 'react';

class Search extends React.Component {
	filterUpdate(value) {
		//Here you will need to update the value of the filter with the value from the textbox

		const input = value.toLowerCase();
		this.props.filterVal = input;
	}


	render() {
		//You will need to save the value from the textbox and update it as it changes
		const { filterVal, filterUpdate} = this.props

		//You will need the onChange value for the input tag to capture the textbox value
		return (
      <form>
        <input
          type='text'
          ref='filterInput'
          placeholder='Type to filter..'
					value={filterVal}
          onChange={() => {
           filterUpdate(this.refs.filterInput.value)
          }}
        />
      </form>
    )
	}
}
export default Search;
