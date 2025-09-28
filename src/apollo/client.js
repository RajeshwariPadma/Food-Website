import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri : import.meta.env.VITE_GRAPHQL_ENDPOINT,
    cache : new InMemoryCache(),
    headers : {
        Authorization : `Bearer ${import.meta.env.VITE_HYGRAPH_TOKEN}`,
    },

});