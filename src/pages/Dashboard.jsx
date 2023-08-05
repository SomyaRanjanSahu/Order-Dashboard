import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [rowKey, setRowKey] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  // Calculating the total number of orders
  const totalOrders = mockData.results.length;

  const rows = mockData.results
  const orders = timestamps.results

  // combined the two different json file into a single json object for better use
  const data = rows.map((rows, index) => ({ ...rows, ...orders[index] }))

  const handleRowClick = (itemId) => {
    const selectedData = data.find((item) => item["&key"] === itemId)

    setRowKey(selectedData["&key"])
    setSelectedOrderDetails(selectedData.executionDetails)
    setSelectedOrderTimeStamps(selectedData.timestamps)
  };

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${totalOrders} orders`} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={[
              "AUD",
              "BGN",
              "BRL",
              "CAD",
              "CHF",
              "CNY",
              "CZK",
              "DKK",
              "EUR",
              "GBP",
              "HKD",
              "HRK",
              "HUF",
              "IDR",
              "ILS",
              "INR",
              "JPY",
              "KRW",
              "MXN",
              "MYR",
              "NOK",
              "NZD",
              "PHP",
              "PLN",
              "RON",
              "SEK",
              "SGD",
              "THB",
              "TRY",
              "USD",
              "ZAR",
            ]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
            rowKey={rowKey}
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
            rowKey={rowKey}
          />
        </div>
        <List rows={mockData.results} orders={timestamps.results} currency={currency} search={searchText} onRowClick={handleRowClick} />
      </div>
    </div>
  );
};

export default Dashboard;
