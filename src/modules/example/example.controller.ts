import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { Example } from './interfaces/example.interface';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  create(@Body() createExampleDto: CreateExampleDto): Example {
    return this.exampleService.create(createExampleDto);
  }

  @Get()
  findAll(): Example[] {
    return this.exampleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Example {
    return this.exampleService.findOne(id);
  }
}
