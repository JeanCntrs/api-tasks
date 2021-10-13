import { Controller, Delete, Get, Patch, Post, Put, Req } from '@nestjs/common';
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

    @Put()
    methodPut(@Req() req: Request) {
        return `method ${req.method}`
    }

    @Patch()
    methodPatch(@Req() req: Request) {
        return `method ${req.method}`
    }

    @Delete()
    methodDelete(@Req() req: Request) {
        return `method ${req.method}`
    }
}