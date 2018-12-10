export const typeDefs = /* GraphQL */ `type AggregateAuthPayload {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AuthPayload {
  token: String!
  user: User!
}

type AuthPayloadConnection {
  pageInfo: PageInfo!
  edges: [AuthPayloadEdge]!
  aggregate: AggregateAuthPayload!
}

input AuthPayloadCreateInput {
  token: String!
  user: UserCreateOneInput!
}

type AuthPayloadEdge {
  node: AuthPayload!
  cursor: String!
}

enum AuthPayloadOrderByInput {
  token_ASC
  token_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AuthPayloadPreviousValues {
  token: String!
}

type AuthPayloadSubscriptionPayload {
  mutation: MutationType!
  node: AuthPayload
  updatedFields: [String!]
  previousValues: AuthPayloadPreviousValues
}

input AuthPayloadSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthPayloadWhereInput
  AND: [AuthPayloadSubscriptionWhereInput!]
  OR: [AuthPayloadSubscriptionWhereInput!]
  NOT: [AuthPayloadSubscriptionWhereInput!]
}

input AuthPayloadUpdateManyMutationInput {
  token: String
}

input AuthPayloadWhereInput {
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  user: UserWhereInput
  AND: [AuthPayloadWhereInput!]
  OR: [AuthPayloadWhereInput!]
  NOT: [AuthPayloadWhereInput!]
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createAuthPayload(data: AuthPayloadCreateInput!): AuthPayload!
  updateManyAuthPayloads(data: AuthPayloadUpdateManyMutationInput!, where: AuthPayloadWhereInput): BatchPayload!
  deleteManyAuthPayloads(where: AuthPayloadWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  authPayloads(where: AuthPayloadWhereInput, orderBy: AuthPayloadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AuthPayload]!
  authPayloadsConnection(where: AuthPayloadWhereInput, orderBy: AuthPayloadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthPayloadConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  authPayload(where: AuthPayloadSubscriptionWhereInput): AuthPayloadSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  name: String
  photoUrl: String
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  name: String
  photoUrl: String
  description: String
  friends: UserCreateManyInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  photoUrl_ASC
  photoUrl_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String
  photoUrl: String
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  photoUrl: String
  photoUrl_not: String
  photoUrl_in: [String!]
  photoUrl_not_in: [String!]
  photoUrl_lt: String
  photoUrl_lte: String
  photoUrl_gt: String
  photoUrl_gte: String
  photoUrl_contains: String
  photoUrl_not_contains: String
  photoUrl_starts_with: String
  photoUrl_not_starts_with: String
  photoUrl_ends_with: String
  photoUrl_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  name: String
  photoUrl: String
  description: String
  friends: UserUpdateManyInput
}

input UserUpdateInput {
  email: String
  name: String
  photoUrl: String
  description: String
  friends: UserUpdateManyInput
}

input UserUpdateManyDataInput {
  email: String
  name: String
  photoUrl: String
  description: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  photoUrl: String
  description: String
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  photoUrl: String
  photoUrl_not: String
  photoUrl_in: [String!]
  photoUrl_not_in: [String!]
  photoUrl_lt: String
  photoUrl_lte: String
  photoUrl_gt: String
  photoUrl_gte: String
  photoUrl_contains: String
  photoUrl_not_contains: String
  photoUrl_starts_with: String
  photoUrl_not_starts_with: String
  photoUrl_ends_with: String
  photoUrl_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`