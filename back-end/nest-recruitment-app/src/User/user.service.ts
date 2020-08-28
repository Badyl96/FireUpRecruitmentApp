import { Injectable, UseGuards, Get } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.model';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }

}
