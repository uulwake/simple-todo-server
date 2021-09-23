import { IsEmail, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  @Length(3, 50)
  name: string;

  @Column({ unique: true })
  @Length(7, 50)
  @IsEmail()
  email: string;

  @Column()
  password: string;
}
