import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'sally@mail.com',
      name: 'Sally',
      password: 'qwertyui123',
    },
    {
      userId: 2,
      email: 'maria@mail.com',
      name: 'Maria',
      password: 'qwertyui123',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
