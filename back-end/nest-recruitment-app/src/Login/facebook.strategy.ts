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
                    clientSecret: '6ff76c9597cb949c8e0cc0d27524506c',
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
