import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionModule } from './region/region.module';
import { AgeModule } from './age/age.module';
import { PopulationModule } from './population/population.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres_db',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'chart_db',
      entities: [],
      synchronize: true,
    }),
    RegionModule,
    AgeModule,
    PopulationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
