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
                    clientID: '',
                    clientSecret: '',
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
