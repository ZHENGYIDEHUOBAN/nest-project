import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('findAll')
  async getHello() {
    return await this.userService.findAll();
  }

  @Post('register')
  async register(@Body() params) {
    const { username, password, gender, age } = params;
    const user = new User(username, password, gender, age);
    return await this.userService.register(user);
  }
}
