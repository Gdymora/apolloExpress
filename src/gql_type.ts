import { gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
export default gql` 
scalar Date

type DateSlip { 
  time: Int!
  date: Date!
}

type Book {
    title: String
    author: String
    getCurrentDate: Date!
  }
  
  type Query {
    hello: String
    totalPosts: Int!
    getCurrentDate: Date!
    getCurrentDateSleepDate: DateSlip
    books: [Book]
    booksloadFile: [Book]
    booksloadFilePromisify: [Book]
  }
`;