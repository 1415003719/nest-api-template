export class MongodbHelper {
  static getConnectOptions() {
    const options: any = {
      useNewUrlParser: true
    };
    if (process.env.NODE_ENV === 'development') {
      return options;
    }
    options.dbName = process.env.MONGODB_DBNAME;
    options.user = process.env.MONGODB_USER;
    options.pass = process.env.MONGODB_PASSWORD;
    return options;
  }

  static getConnectUri() {
    const connectUri = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}`;
    console.log('mongodb connect uri is ', connectUri);
    return connectUri;
  }
}
