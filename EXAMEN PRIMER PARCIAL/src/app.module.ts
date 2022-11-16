import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerieModule } from './serie/serie.module';
import { PersonajeModule } from './personaje/personaje.module';
import { AsignacionModule } from './asignacion/asignacion.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-28.railway.app',
      port: 7711,
      username: 'postgres',
      password: 'O4bi0eFQuoGTs68yS6DE',
      database: 'railway',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    SerieModule,
    PersonajeModule,
    AsignacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
