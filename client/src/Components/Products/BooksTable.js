import React from "react";
import BookRow from "./BookRow";

export class BooksTable extends React.Component {
	render() {
		let rows = this.chunk(this.props.books, this.props.cols);
		for (let i = 0; i < rows.length; i++) {
			rows[i] = <BookRow key={i} items={rows[i]} history={this.props.history}/>
		}
		return <table>
			<tbody>{rows}</tbody>
		</table>;
	}

	chunk(array, chunk) {
		let i, j, result = [];
		for (i = 0, j = array.length; i < j; i += chunk) {
			result.push(array.slice(i, i + chunk));
		}
		return result;
	}
}