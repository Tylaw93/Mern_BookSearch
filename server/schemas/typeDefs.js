const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
    password: String!
  }
  type Book {
    _id:ID
    bookId: String!
    authors:[String]
    description: String
    title: String!
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input BookInput{
    _id:ID
    bookId:String!
    authors:[String]
    description: String!
    title: String!
    image: String
    link: String
  }
  type Query {
    users: [User]
    user(username:String):User
    me:User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(user:ID,book:BookInput!): User
    removeBook(book:BookInput!): User
  }
`;

module.exports = typeDefs;
