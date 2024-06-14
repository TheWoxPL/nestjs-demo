import { Injectable } from '@nestjs/common';
import { Example } from './interfaces/example.interface';
import { CreateExampleDto } from './dto/create-example.dto';

@Injectable()
export class ExampleService {
  private examples: Example[] = [];
  private currentId = 1;

  create(createExampleDto: CreateExampleDto): Example {
    const newExample: Example = {
      id: this.currentId++,
      ...createExampleDto,
      createdAt: new Date(),
    };
    this.examples.push(newExample);
    return newExample;
  }

  findAll(): Example[] {
    return this.examples;
  }

  findOne(id: number): Example {
    return this.examples.find((example) => example.id == id);
  }
}
