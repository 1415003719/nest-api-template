export class MysqlHelper {
  static getConnectOptions() {
    const options: any = {
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DBNAME,
      entities: [process.cwd() + '/src/entities/**/*.entity{.ts,.js}'],
      synchronize: true
    };
    console.info(`Connect to Mysql: ${options.host}:${options.port}/${options.database}`);
    console.info(`Use the Mysql entities: ${options.entities}`);
    return options;
  }
}
