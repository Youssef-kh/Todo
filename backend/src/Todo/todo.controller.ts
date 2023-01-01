import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Post()
  async create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() todo: Todo): Promise<void> {
    this.todoService.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.todoService.delete(id);
  }
}
