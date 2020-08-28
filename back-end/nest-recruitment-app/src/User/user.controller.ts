import { Controller, Get, Req, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/Login/auth.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly authService: UserService) { }

    @UseGuards(AuthGuard('facebook-token'))
    @Get('')
    async getUsers() {
        const lists = await this.authService.findAll();
        return lists;
    }
}

