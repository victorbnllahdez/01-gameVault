import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Videojuego } from './videojuego.entity.js';

@Injectable()
export class VideojuegosService implements OnModuleInit {
  constructor(
    @InjectRepository(Videojuego)
    private readonly repository: Repository<Videojuego>,
  ) {}

  // Inserta datos de ejemplo solo si la tabla está vacía
  async onModuleInit() {
    const total = await this.repository.count();
    if (total === 0) {
      await this.repository.save([
        { titulo: 'Hollow Knight', plataforma: 'Nintendo Switch', puntuacion: 9.4 },
        { titulo: 'Zelda: Tears of the Kingdom', plataforma: 'Nintendo Switch', puntuacion: 9.8 },
        { titulo: 'Forza Horizon 5', plataforma: 'Xbox', puntuacion: 9.1 },
      ]);
    }
  }

  findAll() {
    return this.repository.find();
  }
}