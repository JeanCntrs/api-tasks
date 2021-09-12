import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
    @Get('done')
    methodGet(@Req() req: Request) {
        return `method ${req.method}`
    }

    @Post()
    methodPost(@Req() req: Request) {
        return `method ${req.method}`
    }
}