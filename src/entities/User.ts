import { IsEmail, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  @Length(3, 50)
  name: string;

  @Column({ length: 20 })
  @Length(7, 20)
  @IsEmail()
  email: string;

  @Column({ length: 20 })
  @Length(8, 12)
  password: string;
}
