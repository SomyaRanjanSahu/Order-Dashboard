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
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  // Calculating the total number of orders
  const totalOrders = mockData.results.length;

  const handleRowClick = (selectedData) => {
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
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={mockData.results} orders={timestamps.results} currency={currency} search={searchText} onRowClick={handleRowClick} />
      </div>
    </div>
  );
};

export default Dashboard;
