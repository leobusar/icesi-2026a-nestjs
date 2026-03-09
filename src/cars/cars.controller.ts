import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import type { Car } from './interfaces/car.model';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor (
        private readonly carService: CarsService
    ){}

    @Get()
    getAll(): Car[]{
        return  this.carService.getAll(); 
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe)id: number): Car{
        return  this.carService.getById(id);
    }

    @Post()
    create(@Body() car: CreateCarDto): Car{
        return  this.carService.create(car); 
    }
}
