import React from "react";
import "./styles.css";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Rooms from "./rooms.js";

const client = new ApolloClient({
  uri: "https://covid-19-tracker-21.herokuapp.com/v1/graphql"
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello Avalon</h1>
        <h2>List of available rooms</h2>
      </div>
      <Rooms />
    </ApolloProvider>
  );
}
