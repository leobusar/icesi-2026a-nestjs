import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interfaces/car.model';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            brand: "Chevrolet", 
            model: "Spark", 
            year: 2020
        },
        {
            brand: "Toyota", 
            model: "Land Cruiser", 
            year: 2025
        },
        {
            brand: "Volvo", 
            model: "xc90", 
            year: 2022
        }
    ];
    
    getAll(): Car[] {
        return this.cars;
    }

    getById(id: number): Car{
        if(!this.cars[id])
            throw new NotFoundException(`car with id ${id} not found`);
        return this.cars[id];
    }

    create(car: CreateCarDto): Car{
        this.cars.push(car); 
        return car;
    }

}
