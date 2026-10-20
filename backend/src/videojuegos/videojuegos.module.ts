import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Videojuego } from './videojuego.entity.js';
import { VideojuegosController } from './videojuegos.controller.js';
import { VideojuegosService } from './videojuegos.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Videojuego])],
  controllers: [VideojuegosController],
  providers: [VideojuegosService],
})
export class VideojuegosModule {}