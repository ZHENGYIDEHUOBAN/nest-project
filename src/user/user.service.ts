import { Injectable, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async findAll() {
    return await this.userRepository.find();
  }

  async register(user: User) {
    user.setRegDate(new Date());
    const { raw: { insertId } } = await this.userRepository.insert(user);
    return await this.userRepository.findOne({ id: insertId });
  }
}
