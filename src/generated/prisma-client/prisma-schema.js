// @flow
export const typeDefs = /* GraphQL */ `type AggregateChat {
  count: Int!
}

type AggregateChatMembership {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserRelationship {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Chat {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  members(where: ChatMembershipWhereInput, orderBy: ChatMembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ChatMembership!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type ChatConnection {
  pageInfo: PageInfo!
  edges: [ChatEdge]!
  aggregate: AggregateChat!
}

input ChatCreateInput {
  members: ChatMembershipCreateManyWithoutChatInput
  messages: MessageCreateManyWithoutChatInput
}

input ChatCreateOneWithoutMembersInput {
  create: ChatCreateWithoutMembersInput
  connect: ChatWhereUniqueInput
}

input ChatCreateOneWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  connect: ChatWhereUniqueInput
}

input ChatCreateWithoutMembersInput {
  messages: MessageCreateManyWithoutChatInput
}

input ChatCreateWithoutMessagesInput {
  members: ChatMembershipCreateManyWithoutChatInput
}

type ChatEdge {
  node: Chat!
  cursor: String!
}

type ChatMembership {
  id: ID!
  chat: Chat!
  user: User!
  isMuted: Boolean!
}

type ChatMembershipConnection {
  pageInfo: PageInfo!
  edges: [ChatMembershipEdge]!
  aggregate: AggregateChatMembership!
}

input ChatMembershipCreateInput {
  chat: ChatCreateOneWithoutMembersInput!
  user: UserCreateOneWithoutMembershipsInput!
  isMuted: Boolean
}

input ChatMembershipCreateManyWithoutChatInput {
  create: [ChatMembershipCreateWithoutChatInput!]
  connect: [ChatMembershipWhereUniqueInput!]
}

input ChatMembershipCreateManyWithoutUserInput {
  create: [ChatMembershipCreateWithoutUserInput!]
  connect: [ChatMembershipWhereUniqueInput!]
}

input ChatMembershipCreateWithoutChatInput {
  user: UserCreateOneWithoutMembershipsInput!
  isMuted: Boolean
}

input ChatMembershipCreateWithoutUserInput {
  chat: ChatCreateOneWithoutMembersInput!
  isMuted: Boolean
}

type ChatMembershipEdge {
  node: ChatMembership!
  cursor: String!
}

enum ChatMembershipOrderByInput {
  id_ASC
  id_DESC
  isMuted_ASC
  isMuted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChatMembershipPreviousValues {
  id: ID!
  isMuted: Boolean!
}

input ChatMembershipScalarWhereInput {
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
  isMuted: Boolean
  isMuted_not: Boolean
  AND: [ChatMembershipScalarWhereInput!]
  OR: [ChatMembershipScalarWhereInput!]
  NOT: [ChatMembershipScalarWhereInput!]
}

type ChatMembershipSubscriptionPayload {
  mutation: MutationType!
  node: ChatMembership
  updatedFields: [String!]
  previousValues: ChatMembershipPreviousValues
}

input ChatMembershipSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChatMembershipWhereInput
  AND: [ChatMembershipSubscriptionWhereInput!]
  OR: [ChatMembershipSubscriptionWhereInput!]
  NOT: [ChatMembershipSubscriptionWhereInput!]
}

input ChatMembershipUpdateInput {
  chat: ChatUpdateOneRequiredWithoutMembersInput
  user: UserUpdateOneRequiredWithoutMembershipsInput
  isMuted: Boolean
}

input ChatMembershipUpdateManyDataInput {
  isMuted: Boolean
}

input ChatMembershipUpdateManyMutationInput {
  isMuted: Boolean
}

input ChatMembershipUpdateManyWithoutChatInput {
  create: [ChatMembershipCreateWithoutChatInput!]
  delete: [ChatMembershipWhereUniqueInput!]
  connect: [ChatMembershipWhereUniqueInput!]
  set: [ChatMembershipWhereUniqueInput!]
  disconnect: [ChatMembershipWhereUniqueInput!]
  update: [ChatMembershipUpdateWithWhereUniqueWithoutChatInput!]
  upsert: [ChatMembershipUpsertWithWhereUniqueWithoutChatInput!]
  deleteMany: [ChatMembershipScalarWhereInput!]
  updateMany: [ChatMembershipUpdateManyWithWhereNestedInput!]
}

input ChatMembershipUpdateManyWithoutUserInput {
  create: [ChatMembershipCreateWithoutUserInput!]
  delete: [ChatMembershipWhereUniqueInput!]
  connect: [ChatMembershipWhereUniqueInput!]
  set: [ChatMembershipWhereUniqueInput!]
  disconnect: [ChatMembershipWhereUniqueInput!]
  update: [ChatMembershipUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ChatMembershipUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ChatMembershipScalarWhereInput!]
  updateMany: [ChatMembershipUpdateManyWithWhereNestedInput!]
}

input ChatMembershipUpdateManyWithWhereNestedInput {
  where: ChatMembershipScalarWhereInput!
  data: ChatMembershipUpdateManyDataInput!
}

input ChatMembershipUpdateWithoutChatDataInput {
  user: UserUpdateOneRequiredWithoutMembershipsInput
  isMuted: Boolean
}

input ChatMembershipUpdateWithoutUserDataInput {
  chat: ChatUpdateOneRequiredWithoutMembersInput
  isMuted: Boolean
}

input ChatMembershipUpdateWithWhereUniqueWithoutChatInput {
  where: ChatMembershipWhereUniqueInput!
  data: ChatMembershipUpdateWithoutChatDataInput!
}

input ChatMembershipUpdateWithWhereUniqueWithoutUserInput {
  where: ChatMembershipWhereUniqueInput!
  data: ChatMembershipUpdateWithoutUserDataInput!
}

input ChatMembershipUpsertWithWhereUniqueWithoutChatInput {
  where: ChatMembershipWhereUniqueInput!
  update: ChatMembershipUpdateWithoutChatDataInput!
  create: ChatMembershipCreateWithoutChatInput!
}

input ChatMembershipUpsertWithWhereUniqueWithoutUserInput {
  where: ChatMembershipWhereUniqueInput!
  update: ChatMembershipUpdateWithoutUserDataInput!
  create: ChatMembershipCreateWithoutUserInput!
}

input ChatMembershipWhereInput {
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
  chat: ChatWhereInput
  user: UserWhereInput
  isMuted: Boolean
  isMuted_not: Boolean
  AND: [ChatMembershipWhereInput!]
  OR: [ChatMembershipWhereInput!]
  NOT: [ChatMembershipWhereInput!]
}

input ChatMembershipWhereUniqueInput {
  id: ID
}

enum ChatOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChatPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ChatSubscriptionPayload {
  mutation: MutationType!
  node: Chat
  updatedFields: [String!]
  previousValues: ChatPreviousValues
}

input ChatSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChatWhereInput
  AND: [ChatSubscriptionWhereInput!]
  OR: [ChatSubscriptionWhereInput!]
  NOT: [ChatSubscriptionWhereInput!]
}

input ChatUpdateInput {
  members: ChatMembershipUpdateManyWithoutChatInput
  messages: MessageUpdateManyWithoutChatInput
}

input ChatUpdateOneRequiredWithoutMembersInput {
  create: ChatCreateWithoutMembersInput
  update: ChatUpdateWithoutMembersDataInput
  upsert: ChatUpsertWithoutMembersInput
  connect: ChatWhereUniqueInput
}

input ChatUpdateOneRequiredWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  update: ChatUpdateWithoutMessagesDataInput
  upsert: ChatUpsertWithoutMessagesInput
  connect: ChatWhereUniqueInput
}

input ChatUpdateWithoutMembersDataInput {
  messages: MessageUpdateManyWithoutChatInput
}

input ChatUpdateWithoutMessagesDataInput {
  members: ChatMembershipUpdateManyWithoutChatInput
}

input ChatUpsertWithoutMembersInput {
  update: ChatUpdateWithoutMembersDataInput!
  create: ChatCreateWithoutMembersInput!
}

input ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput!
  create: ChatCreateWithoutMessagesInput!
}

input ChatWhereInput {
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
  members_every: ChatMembershipWhereInput
  members_some: ChatMembershipWhereInput
  members_none: ChatMembershipWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [ChatWhereInput!]
  OR: [ChatWhereInput!]
  NOT: [ChatWhereInput!]
}

input ChatWhereUniqueInput {
  id: ID
}

scalar DateTime

type File {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  contentType: String!
  size: Int!
  fileName: String!
}

type FileConnection {
  pageInfo: PageInfo!
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  contentType: String!
  size: Int!
  fileName: String!
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

type FileEdge {
  node: File!
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  contentType_ASC
  contentType_DESC
  size_ASC
  size_DESC
  fileName_ASC
  fileName_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  contentType: String!
  size: Int!
  fileName: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FileWhereInput
  AND: [FileSubscriptionWhereInput!]
  OR: [FileSubscriptionWhereInput!]
  NOT: [FileSubscriptionWhereInput!]
}

input FileUpdateDataInput {
  contentType: String
  size: Int
  fileName: String
}

input FileUpdateInput {
  contentType: String
  size: Int
  fileName: String
}

input FileUpdateManyMutationInput {
  contentType: String
  size: Int
  fileName: String
}

input FileUpdateOneInput {
  create: FileCreateInput
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: FileWhereUniqueInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
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
  contentType: String
  contentType_not: String
  contentType_in: [String!]
  contentType_not_in: [String!]
  contentType_lt: String
  contentType_lte: String
  contentType_gt: String
  contentType_gte: String
  contentType_contains: String
  contentType_not_contains: String
  contentType_starts_with: String
  contentType_not_starts_with: String
  contentType_ends_with: String
  contentType_not_ends_with: String
  size: Int
  size_not: Int
  size_in: [Int!]
  size_not_in: [Int!]
  size_lt: Int
  size_lte: Int
  size_gt: Int
  size_gte: Int
  fileName: String
  fileName_not: String
  fileName_in: [String!]
  fileName_not_in: [String!]
  fileName_lt: String
  fileName_lte: String
  fileName_gt: String
  fileName_gte: String
  fileName_contains: String
  fileName_not_contains: String
  fileName_starts_with: String
  fileName_not_starts_with: String
  fileName_ends_with: String
  fileName_not_ends_with: String
  AND: [FileWhereInput!]
  OR: [FileWhereInput!]
  NOT: [FileWhereInput!]
}

input FileWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime!
  chat: Chat!
  author: User!
  type: MessageType!
  text: String
  attachment: File
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  deletedAt: DateTime!
  chat: ChatCreateOneWithoutMessagesInput!
  author: UserCreateOneInput!
  type: MessageType!
  text: String
  attachment: FileCreateOneInput
}

input MessageCreateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutChatInput {
  deletedAt: DateTime!
  author: UserCreateOneInput!
  type: MessageType!
  text: String
  attachment: FileCreateOneInput
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deletedAt_ASC
  deletedAt_DESC
  type_ASC
  type_DESC
  text_ASC
  text_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deletedAt: DateTime!
  type: MessageType!
  text: String
}

input MessageScalarWhereInput {
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
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  type: MessageType
  type_not: MessageType
  type_in: [MessageType!]
  type_not_in: [MessageType!]
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

enum MessageType {
  SYSTEM
  TEXT
  FILE
}

input MessageUpdateInput {
  deletedAt: DateTime
  chat: ChatUpdateOneRequiredWithoutMessagesInput
  author: UserUpdateOneRequiredInput
  type: MessageType
  text: String
  attachment: FileUpdateOneInput
}

input MessageUpdateManyDataInput {
  deletedAt: DateTime
  type: MessageType
  text: String
}

input MessageUpdateManyMutationInput {
  deletedAt: DateTime
  type: MessageType
  text: String
}

input MessageUpdateManyWithoutChatInput {
  create: [MessageCreateWithoutChatInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChatInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChatInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutChatDataInput {
  deletedAt: DateTime
  author: UserUpdateOneRequiredInput
  type: MessageType
  text: String
  attachment: FileUpdateOneInput
}

input MessageUpdateWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChatDataInput!
}

input MessageUpsertWithWhereUniqueWithoutChatInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChatDataInput!
  create: MessageCreateWithoutChatInput!
}

input MessageWhereInput {
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
  deletedAt: DateTime
  deletedAt_not: DateTime
  deletedAt_in: [DateTime!]
  deletedAt_not_in: [DateTime!]
  deletedAt_lt: DateTime
  deletedAt_lte: DateTime
  deletedAt_gt: DateTime
  deletedAt_gte: DateTime
  chat: ChatWhereInput
  author: UserWhereInput
  type: MessageType
  type_not: MessageType
  type_in: [MessageType!]
  type_not_in: [MessageType!]
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  attachment: FileWhereInput
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createChat(data: ChatCreateInput!): Chat!
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  createChatMembership(data: ChatMembershipCreateInput!): ChatMembership!
  updateChatMembership(data: ChatMembershipUpdateInput!, where: ChatMembershipWhereUniqueInput!): ChatMembership
  updateManyChatMemberships(data: ChatMembershipUpdateManyMutationInput!, where: ChatMembershipWhereInput): BatchPayload!
  upsertChatMembership(where: ChatMembershipWhereUniqueInput!, create: ChatMembershipCreateInput!, update: ChatMembershipUpdateInput!): ChatMembership!
  deleteChatMembership(where: ChatMembershipWhereUniqueInput!): ChatMembership
  deleteManyChatMemberships(where: ChatMembershipWhereInput): BatchPayload!
  createFile(data: FileCreateInput!): File!
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  deleteFile(where: FileWhereUniqueInput!): File
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserRelationship(data: UserRelationshipCreateInput!): UserRelationship!
  updateUserRelationship(data: UserRelationshipUpdateInput!, where: UserRelationshipWhereUniqueInput!): UserRelationship
  updateManyUserRelationships(data: UserRelationshipUpdateManyMutationInput!, where: UserRelationshipWhereInput): BatchPayload!
  upsertUserRelationship(where: UserRelationshipWhereUniqueInput!, create: UserRelationshipCreateInput!, update: UserRelationshipUpdateInput!): UserRelationship!
  deleteUserRelationship(where: UserRelationshipWhereUniqueInput!): UserRelationship
  deleteManyUserRelationships(where: UserRelationshipWhereInput): BatchPayload!
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
  chat(where: ChatWhereUniqueInput!): Chat
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  chatMembership(where: ChatMembershipWhereUniqueInput!): ChatMembership
  chatMemberships(where: ChatMembershipWhereInput, orderBy: ChatMembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ChatMembership]!
  chatMembershipsConnection(where: ChatMembershipWhereInput, orderBy: ChatMembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatMembershipConnection!
  file(where: FileWhereUniqueInput!): File
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userRelationship(where: UserRelationshipWhereUniqueInput!): UserRelationship
  userRelationships(where: UserRelationshipWhereInput, orderBy: UserRelationshipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRelationship]!
  userRelationshipsConnection(where: UserRelationshipWhereInput, orderBy: UserRelationshipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRelationshipConnection!
  node(id: ID!): Node
}

type Subscription {
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  chatMembership(where: ChatMembershipSubscriptionWhereInput): ChatMembershipSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userRelationship(where: UserRelationshipSubscriptionWhereInput): UserRelationshipSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  passwordDigest: String!
  passwordResetToken: String
  fullName: String
  photo: File
  statusMessage: String
  memberships(where: ChatMembershipWhereInput, orderBy: ChatMembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ChatMembership!]
  relationships(where: UserRelationshipWhereInput, orderBy: UserRelationshipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRelationship!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  passwordDigest: String!
  passwordResetToken: String
  fullName: String
  photo: FileCreateOneInput
  statusMessage: String
  memberships: ChatMembershipCreateManyWithoutUserInput
  relationships: UserRelationshipCreateManyWithoutFromUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMembershipsInput {
  create: UserCreateWithoutMembershipsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRelationshipsInput {
  create: UserCreateWithoutRelationshipsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMembershipsInput {
  email: String!
  passwordDigest: String!
  passwordResetToken: String
  fullName: String
  photo: FileCreateOneInput
  statusMessage: String
  relationships: UserRelationshipCreateManyWithoutFromUserInput
}

input UserCreateWithoutRelationshipsInput {
  email: String!
  passwordDigest: String!
  passwordResetToken: String
  fullName: String
  photo: FileCreateOneInput
  statusMessage: String
  memberships: ChatMembershipCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  passwordDigest_ASC
  passwordDigest_DESC
  passwordResetToken_ASC
  passwordResetToken_DESC
  fullName_ASC
  fullName_DESC
  statusMessage_ASC
  statusMessage_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  passwordDigest: String!
  passwordResetToken: String
  fullName: String
  statusMessage: String
}

type UserRelationship {
  id: ID!
  type: UserRelationType!
  fromUser: User!
  toUser: User!
}

type UserRelationshipConnection {
  pageInfo: PageInfo!
  edges: [UserRelationshipEdge]!
  aggregate: AggregateUserRelationship!
}

input UserRelationshipCreateInput {
  type: UserRelationType!
  fromUser: UserCreateOneWithoutRelationshipsInput!
  toUser: UserCreateOneInput!
}

input UserRelationshipCreateManyWithoutFromUserInput {
  create: [UserRelationshipCreateWithoutFromUserInput!]
  connect: [UserRelationshipWhereUniqueInput!]
}

input UserRelationshipCreateWithoutFromUserInput {
  type: UserRelationType!
  toUser: UserCreateOneInput!
}

type UserRelationshipEdge {
  node: UserRelationship!
  cursor: String!
}

enum UserRelationshipOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserRelationshipPreviousValues {
  id: ID!
  type: UserRelationType!
}

input UserRelationshipScalarWhereInput {
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
  type: UserRelationType
  type_not: UserRelationType
  type_in: [UserRelationType!]
  type_not_in: [UserRelationType!]
  AND: [UserRelationshipScalarWhereInput!]
  OR: [UserRelationshipScalarWhereInput!]
  NOT: [UserRelationshipScalarWhereInput!]
}

type UserRelationshipSubscriptionPayload {
  mutation: MutationType!
  node: UserRelationship
  updatedFields: [String!]
  previousValues: UserRelationshipPreviousValues
}

input UserRelationshipSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserRelationshipWhereInput
  AND: [UserRelationshipSubscriptionWhereInput!]
  OR: [UserRelationshipSubscriptionWhereInput!]
  NOT: [UserRelationshipSubscriptionWhereInput!]
}

input UserRelationshipUpdateInput {
  type: UserRelationType
  fromUser: UserUpdateOneRequiredWithoutRelationshipsInput
  toUser: UserUpdateOneRequiredInput
}

input UserRelationshipUpdateManyDataInput {
  type: UserRelationType
}

input UserRelationshipUpdateManyMutationInput {
  type: UserRelationType
}

input UserRelationshipUpdateManyWithoutFromUserInput {
  create: [UserRelationshipCreateWithoutFromUserInput!]
  delete: [UserRelationshipWhereUniqueInput!]
  connect: [UserRelationshipWhereUniqueInput!]
  set: [UserRelationshipWhereUniqueInput!]
  disconnect: [UserRelationshipWhereUniqueInput!]
  update: [UserRelationshipUpdateWithWhereUniqueWithoutFromUserInput!]
  upsert: [UserRelationshipUpsertWithWhereUniqueWithoutFromUserInput!]
  deleteMany: [UserRelationshipScalarWhereInput!]
  updateMany: [UserRelationshipUpdateManyWithWhereNestedInput!]
}

input UserRelationshipUpdateManyWithWhereNestedInput {
  where: UserRelationshipScalarWhereInput!
  data: UserRelationshipUpdateManyDataInput!
}

input UserRelationshipUpdateWithoutFromUserDataInput {
  type: UserRelationType
  toUser: UserUpdateOneRequiredInput
}

input UserRelationshipUpdateWithWhereUniqueWithoutFromUserInput {
  where: UserRelationshipWhereUniqueInput!
  data: UserRelationshipUpdateWithoutFromUserDataInput!
}

input UserRelationshipUpsertWithWhereUniqueWithoutFromUserInput {
  where: UserRelationshipWhereUniqueInput!
  update: UserRelationshipUpdateWithoutFromUserDataInput!
  create: UserRelationshipCreateWithoutFromUserInput!
}

input UserRelationshipWhereInput {
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
  type: UserRelationType
  type_not: UserRelationType
  type_in: [UserRelationType!]
  type_not_in: [UserRelationType!]
  fromUser: UserWhereInput
  toUser: UserWhereInput
  AND: [UserRelationshipWhereInput!]
  OR: [UserRelationshipWhereInput!]
  NOT: [UserRelationshipWhereInput!]
}

input UserRelationshipWhereUniqueInput {
  id: ID
}

enum UserRelationType {
  FRIEND
  WAIT_APPROVAL
  BLOCKED
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
  passwordDigest: String
  passwordResetToken: String
  fullName: String
  photo: FileUpdateOneInput
  statusMessage: String
  memberships: ChatMembershipUpdateManyWithoutUserInput
  relationships: UserRelationshipUpdateManyWithoutFromUserInput
}

input UserUpdateInput {
  email: String
  passwordDigest: String
  passwordResetToken: String
  fullName: String
  photo: FileUpdateOneInput
  statusMessage: String
  memberships: ChatMembershipUpdateManyWithoutUserInput
  relationships: UserRelationshipUpdateManyWithoutFromUserInput
}

input UserUpdateManyMutationInput {
  email: String
  passwordDigest: String
  passwordResetToken: String
  fullName: String
  statusMessage: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMembershipsInput {
  create: UserCreateWithoutMembershipsInput
  update: UserUpdateWithoutMembershipsDataInput
  upsert: UserUpsertWithoutMembershipsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutRelationshipsInput {
  create: UserCreateWithoutRelationshipsInput
  update: UserUpdateWithoutRelationshipsDataInput
  upsert: UserUpsertWithoutRelationshipsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutMembershipsDataInput {
  email: String
  passwordDigest: String
  passwordResetToken: String
  fullName: String
  photo: FileUpdateOneInput
  statusMessage: String
  relationships: UserRelationshipUpdateManyWithoutFromUserInput
}

input UserUpdateWithoutRelationshipsDataInput {
  email: String
  passwordDigest: String
  passwordResetToken: String
  fullName: String
  photo: FileUpdateOneInput
  statusMessage: String
  memberships: ChatMembershipUpdateManyWithoutUserInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutMembershipsInput {
  update: UserUpdateWithoutMembershipsDataInput!
  create: UserCreateWithoutMembershipsInput!
}

input UserUpsertWithoutRelationshipsInput {
  update: UserUpdateWithoutRelationshipsDataInput!
  create: UserCreateWithoutRelationshipsInput!
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
  passwordDigest: String
  passwordDigest_not: String
  passwordDigest_in: [String!]
  passwordDigest_not_in: [String!]
  passwordDigest_lt: String
  passwordDigest_lte: String
  passwordDigest_gt: String
  passwordDigest_gte: String
  passwordDigest_contains: String
  passwordDigest_not_contains: String
  passwordDigest_starts_with: String
  passwordDigest_not_starts_with: String
  passwordDigest_ends_with: String
  passwordDigest_not_ends_with: String
  passwordResetToken: String
  passwordResetToken_not: String
  passwordResetToken_in: [String!]
  passwordResetToken_not_in: [String!]
  passwordResetToken_lt: String
  passwordResetToken_lte: String
  passwordResetToken_gt: String
  passwordResetToken_gte: String
  passwordResetToken_contains: String
  passwordResetToken_not_contains: String
  passwordResetToken_starts_with: String
  passwordResetToken_not_starts_with: String
  passwordResetToken_ends_with: String
  passwordResetToken_not_ends_with: String
  fullName: String
  fullName_not: String
  fullName_in: [String!]
  fullName_not_in: [String!]
  fullName_lt: String
  fullName_lte: String
  fullName_gt: String
  fullName_gte: String
  fullName_contains: String
  fullName_not_contains: String
  fullName_starts_with: String
  fullName_not_starts_with: String
  fullName_ends_with: String
  fullName_not_ends_with: String
  photo: FileWhereInput
  statusMessage: String
  statusMessage_not: String
  statusMessage_in: [String!]
  statusMessage_not_in: [String!]
  statusMessage_lt: String
  statusMessage_lte: String
  statusMessage_gt: String
  statusMessage_gte: String
  statusMessage_contains: String
  statusMessage_not_contains: String
  statusMessage_starts_with: String
  statusMessage_not_starts_with: String
  statusMessage_ends_with: String
  statusMessage_not_ends_with: String
  memberships_every: ChatMembershipWhereInput
  memberships_some: ChatMembershipWhereInput
  memberships_none: ChatMembershipWhereInput
  relationships_every: UserRelationshipWhereInput
  relationships_some: UserRelationshipWhereInput
  relationships_none: UserRelationshipWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`