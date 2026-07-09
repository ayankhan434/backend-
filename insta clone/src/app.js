const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authroutes.js');
const postRouter = require('./routes/post.routes.js');


const app = express();
app.use(express.json());
app.use("/api/posts",postRouter);


app.use("/api/auth",authRouter);
app.use(cookieParser());


module.exports=app;