import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user.model';
import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { use } from 'passport';


@Injectable()
export class AuthService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) { }

    async createIfDoesNotExist(profile) {
        const user = await this.userModel
            .findOne({ 'email': profile.emails[0].value })
            .exec();
        if (user) {
            return await user;
        }
        const createdUser = new this.userModel({
            email: profile.emails[0].value,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
        });
        return await createdUser.save();
    }

}
