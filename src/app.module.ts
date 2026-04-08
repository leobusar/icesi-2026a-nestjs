import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, 
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME, 
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD,
      synchronize: true, 
      //entities: [], 
      autoLoadEntities: true
    }),

    CarsModule,

    BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
