import { gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
export default gql` 
scalar Date

type DateSlip { 
  time: Int!
  date: Date!
}

  type Query {
    getCurrentDate: Date!
    getCurrentDateSleepDate: DateSlip
  }
`;