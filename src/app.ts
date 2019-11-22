import createError from "http-errors"
import express, { Request, Response, NextFunction, Application } from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"

import IndexRouter from "./routes/index"
import UsersRouter from "./routes/users"

var app: Application = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', IndexRouter);
app.use('/users', UsersRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// TODO delete this code
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})


export default app;
