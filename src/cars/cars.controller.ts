import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import type { Car } from './entities/car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor (
        private readonly carService: CarsService
    ){}

    @Get()
    getAll(): Promise<Car[]>{
        return  this.carService.getAll(); 
    }

    @Get(':id')
    getById(@Param('id', ParseUUIDPipe)id: string): Promise<Car>{
        return  this.carService.getById(id);
    }

    @Post()
    create(@Body() car: CreateCarDto): Promise<Car>{
        return  this.carService.create(car); 
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe)id: string, @Body() car: UpdateCarDto): Promise<Car>{
        return  this.carService.update(id, car); 
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe)id: string){
        return this.carService.delete(id);
    }
}
