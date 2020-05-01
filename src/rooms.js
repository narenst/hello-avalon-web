import React from "react";
import "./styles.css";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ROOMS = gql`
  {
    room {
      id
      # players {
      #   id
      #   screen_name
      # }
    }
  }
`;

export default function ShowRooms() {
  const { loading, error, data } = useQuery(ROOMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.room[0].id;
}
