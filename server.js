import express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';

// import OAuthSecurityMiddleWare from './path/to/OAuthSecurityMiddleWare';

const PORT = 3000;
const app = express();
const data = 
// app.use(OAuthSecurityMiddleWare());
app.use('/graphql', jsonGraphqlExpress(data));
app.listen(PORT);