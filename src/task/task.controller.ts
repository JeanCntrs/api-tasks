import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    create(@Body() taskDTO: TaskDTO) {
        // throw new HttpException('error http exception', HttpStatus.BAD_REQUEST)
        // throw new BadRequestException('Bad request exception');
        
         return this.taskService.create(taskDTO)
    }

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
        return this.taskService.update(id, taskDTO);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.taskService.delete(id);
    }
}