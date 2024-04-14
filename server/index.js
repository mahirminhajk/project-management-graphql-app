import express from 'express';
import * as dotenv from 'dotenv';

import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";

import schema from './schema/schema.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

//* graphql
app.use('/graphql', createHandler({
    schema: schema,
}));

app.get("/iql", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});
