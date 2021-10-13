import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
    @Get('done')
    methodGet(
        @Req() req: Request,
        @Query('id') id: number,
        @Query('description') description: number
    ) {
        return { method: req.method, id, description }
    }

    @Post(':id')
    methodPost(@Req() req: Request, @Param('id') id: string) {
        return { method: req.method, id }
    }

    @Put()
    methodPut(@Req() req: Request, @Body() body: any) {
        return { method: req.method, body }
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