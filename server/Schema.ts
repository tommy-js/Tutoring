const graphql = require("graphql");
const { v4: uuidv4 } = require("uuid");
var bcrypt = require("bcryptjs");

const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLBoolean,
  GraphQLSchema,
} = graphql;

const User = require("./models/user");
const Course = require("./models/course");

const UserQuery = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    userId: { type: GraphQLID },
    username: { type: GraphQLString },
    courses: { type: new GraphQLList(CourseQuery) },
  }),
});

const CourseQuery = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    courseId: { type: GraphQLID },
    title: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserQuery,
      args: {
        token: { type: GraphQLString },
      },
      async resolve(parent, args) {
        let user = await User.findOne({ token: args.token });

        let tokensalt = bcrypt.genSaltSync(10);
        let token = bcrypt.hashSync(user.username, tokensalt);

        let updateUser = await User.findOneAndUpdate(
          { token: user.token },
          {
            $set: {
              token: token,
            },
          }
        );
        return User.findOne({ token: token });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserQuery,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {},
    },
  },
});
