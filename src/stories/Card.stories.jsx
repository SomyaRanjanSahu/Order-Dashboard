import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../component/card/Card.jsx";

// Sample card data array
const cardData = [
    {
        OrderID: "SE|20221104|179|9:1:NEWO-1",
        BuySellIndicator: "BUYI",
        OrderStatus: "NEWO",
        OrderType: "Market",
        OrderReceived: "2022-12-04T15:29:00Z",
        OrderStatusUpdated: "2022-12-04T15:29:00Z",
        OrderSubmitted: "2023-10-05T12:34:56",
    },
    {
        OrderID: "SE|20221104|179|9:1:NEWO-2",
        BuySellIndicator: "BUYI",
        OrderStatus: "NEWO",
        OrderType: "Limit",
        OrderReceived: "2022-11-04T15:29:00Z",
        OrderStatusUpdated: "2022-11-04T15:29:00Z",
        OrderSubmitted: "2023-09-05T12:34:56",
    },
    {
        OrderID: "SE|202211454|179|9:1:NEWO-3",
        BuySellIndicator: "SELL",
        OrderStatus: "NEWO",
        OrderType: "Market",
        OrderReceived: "2022-10-04T15:29:00Z",
        OrderStatusUpdated: "2022-10-04T15:29:00Z",
        OrderSubmitted: "2023-08-05T12:34:56",
    }
];

// Order names
const orders = ["Order1", "Order2", "Order3"];

// Card titles
const title = ["Order Details", "Order Summary", "Order Information"];

// Stories defined using cardData and title arrays
storiesOf("Card", module)
    .add(orders[0], () => <Card cardData={cardData[0]} title={title[0]} />)
    .add(orders[1], () => <Card cardData={cardData[1]} title={title[1]} />)
    .add(orders[2], () => <Card cardData={cardData[2]} title={title[2]} />);

