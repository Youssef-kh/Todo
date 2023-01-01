import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Todo } from "./Todo/todo.entity";
import { TodoModule } from "./Todo/todo.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: null,
      database: 'todo_project',
      entities: [Todo],
      synchronize: true,
      dropSchema: true
    }), TodoModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }