import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MysqlHelper } from './lib';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(MysqlHelper.getConnectOptions())],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    if (connection.isConnected) {
      console.info(`Connect to Mysql/${connection.driver.database} success`);
    }
  }
}
