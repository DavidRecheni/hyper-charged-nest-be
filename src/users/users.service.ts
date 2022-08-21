import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './User/dto/CreateUser.dto';
import { User } from './User/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getById(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

createUser(createUserDTO: CreateUserDTO){
  const newUser = this.usersRepository.create(createUserDTO);
  return this.usersRepository.save(newUser);
}
}
