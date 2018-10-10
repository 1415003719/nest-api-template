import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbHelper } from './lib';

@Module({
  imports: [MongooseModule.forRoot(MongodbHelper.getConnectUri(), MongodbHelper.getConnectOptions())],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
