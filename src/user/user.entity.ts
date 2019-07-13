import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  constructor(username: string, password: string, gender: string, age: number, email: string, nickname: string) {
    this.username = username;
    this.password = password;
    this.gender = gender;
    this.age = age;
    this.email = email;
    this.nickname = nickname;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  code: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  nickname: string;

  @Column({ type: 'nvarchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'nvarchar', length: 20, nullable: true })
  username: string;

  @Column({ type: 'nvarchar', length: 20, nullable: true })
  password: string;

  @Column({ type: 'nvarchar', length: 10, nullable: true })
  gender: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column()
  regDate: Date;

  setRegDate(date: Date) {
    this.regDate = date;
  }
}
