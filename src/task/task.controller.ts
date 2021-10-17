import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() taskDTO: TaskDTO) {
        return this.taskService.create(taskDTO)
    }

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.taskService.findOne(id)
    }
}