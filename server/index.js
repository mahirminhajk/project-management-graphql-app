import express from 'express';
import * as dotenv from 'dotenv';
import colors from 'colors'

import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";

import schema from './schema/schema.js';
import { connectDB } from './config/db.js'

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

//* connect to db
connectDB();

//* graphql
app.use('/graphql', createHandler({
    schema: schema,
}));

if (process.env.NODE_ENV === 'development') {
    app.get("/iql", (_req, res) => {
        res.type("html")
        res.end(ruruHTML({ endpoint: "/graphql" }))
    })
}

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);

});
