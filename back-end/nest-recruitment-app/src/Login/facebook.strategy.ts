import { Injectable } from '@nestjs/common';
import * as FacebookTokenStrategy from 'passport-facebook-token';
import { use } from 'passport';
import { AuthService } from './auth.service';

@Injectable()
export class FacebookStrategy {
    constructor(private readonly authService: AuthService) {
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
                    const user = await this.authService.createIfDoesNotExist(
                        profile,
                    );
                    return done(null, user);
                },
            ),
        );
    }
}
