import { Controller, Get, Req, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('facebook-token'))
    @Get('facebook')
    async getTokenAfterFacebookSignIn(@Req() req) { }

}

