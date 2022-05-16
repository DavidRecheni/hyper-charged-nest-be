import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getById(id);
  }

  @Post()
  createUser(@Body() userReq: User) {
    return userReq.publicAddress;
  }
}
