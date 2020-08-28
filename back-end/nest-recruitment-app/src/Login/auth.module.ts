import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { FacebookStrategy } from './facebook.strategy';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.model';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),],
    providers: [FacebookStrategy, AuthService],
    controllers: [AuthController],
})
export class AuthModule { }
