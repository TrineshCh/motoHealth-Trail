export const queries = `#graphql
  vehicleById(id: ID!): Vehicle!
  vehicleByBrandAndModel(brand: String!, model: String!): Vehicle
  vehicleByBrand(brand: String!): [Vehicle!]!
  userVehicles(userId: ID!): [UserVehicle!]!
  userVehicleCount(userId: ID!): Int!
  allVehicleBrands: [String!]!
  allVehicles: [Vehicle!]! 
`;
