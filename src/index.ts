import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import typeDefs from "./gql_type";
import resolvers from "./gql";
import express from 'express';
import http from 'http';
import path from 'path';

async function listen(port: number) {
    const app = express();
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/test.html'));
    })
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })
    await server.start();
    server.applyMiddleware({ app });
    return new Promise((resolve, reject) => {
        httpServer.listen(port).once('listening', resolve).once('error', reject);
    })
}

async function main() {
    try {
        await listen(4000)
        console.log('🚀 Server is ready at http://localhost:4000/graphql');
    } catch (err) {
        console.error('💀 Error starting the node server', err);
    }
}

function mainThen() {
    listen(4001).then(() =>
        console.log('🚀 Server is ready at http://localhost:4001/graphql')
    ).catch((err) =>
        console.error('💀 Error starting the node server', err)
    );

}

mainThen();
main();