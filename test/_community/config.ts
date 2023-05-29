import { buildConfig } from "../buildConfig";
import { devUser } from "../credentials";
import { PostsCollection, postsSlug } from "./collections/Posts";

export default buildConfig({
  collections: [PostsCollection],
  graphQL: {
    schemaOutputFile: "./test/_community/schema.graphql",
  },

  onInit: async (payload) => {
    await payload.create({
      collection: "users",
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    });

    await payload.create({
      collection: postsSlug,
      data: {
        text: "example post",
      },
    });
  },
});
