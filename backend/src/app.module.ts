import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideojuegosModule } from './videojuegos/videojuegos.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgre',
      database: 'databridge_e01',
      autoLoadEntities: true,
      synchronize: true, // crea la tabla sola (solo para clase)
    }),
    VideojuegosModule,
  ],
})
export class AppModule {}