import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './Login/auth.module';
import { UserModule } from './User/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, UserModule, MongooseModule.forRoot(
    'mongodb+srv://root:root@cluster0.mts4m.mongodb.net/users?retryWrites=true&w=majority',
  ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
