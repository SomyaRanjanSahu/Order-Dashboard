import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, orders, currency, search }) => {

	// this function holds the data which is merged with the timestamp data
	const data = rows.map((rows, index) => ({ ...rows, ...orders[index] }))

	// this function filters the data based on the search input
	const filteredItem = data.filter((item) => item["&id"].toLowerCase().includes(search.toLowerCase()))

	return (
		<table className={styles.container} >
			<thead>
				<ListHeader>
					<ListHeaderCell>Order ID</ListHeaderCell>
					<ListHeaderCell>Buy/Sell</ListHeaderCell>
					<ListHeaderCell>Country</ListHeaderCell>
					<ListHeaderCell>Order Submitted</ListHeaderCell>
					<ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
				</ListHeader>
			</thead>
			<tbody>
				{filteredItem.map((row) => (
					<ListRow>
						<ListRowCell>{row["&id"]}</ListRowCell>
						<ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
						<ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
						<ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
						<ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell> 
					</ListRow>
				))}
			</tbody>
		</table>
	);
};

export default List;
