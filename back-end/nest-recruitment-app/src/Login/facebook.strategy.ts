import { Injectable } from '@nestjs/common';
import * as FacebookTokenStrategy from 'passport-facebook-token';
import { use } from 'passport';

@Injectable()
export class FacebookStrategy {
    constructor() {
        this.init();
    }
    init() {
        use(
            new FacebookTokenStrategy(
                {
                    clientID: '2888314054749151',
                    clientSecret: '1cbcfd410b775f59ea2337f39170ded6',
                },
                async (
                    accessToken: string,
                    refreshToken: string,
                    profile: any,
                    done: any,
                ) => {
                    // const user = await this.userService.findOrCreate(
                    //   profile,
                    // );
                    const user = {};
                    return done(null, user);
                },
            ),
        );
    }
}
