import { Controller, Get } from '@nestjs/common';
import { VideojuegosService } from './videojuegos.service.js';

@Controller('videojuegos')
export class VideojuegosController {
  constructor(private readonly service: VideojuegosService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}