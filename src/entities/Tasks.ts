import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { TaskPriority } from "../enums/task-priority";

@Entity({ name: "tasks" })
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column("text")
  description: string;

  @Column({ nullable: true })
  deadline: Date;

  @Column({ type: "enum", enum: TaskPriority, default: TaskPriority.MEDIUM })
  priority: TaskPriority;
}
