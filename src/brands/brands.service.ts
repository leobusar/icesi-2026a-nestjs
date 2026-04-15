import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand) private readonly brandRepository: Repository<Brand>
  ){}

  async create(createBrandDto: CreateBrandDto) {
    try {
      const brand = this.brandRepository.create(createBrandDto); 
      return await this.brandRepository.save(brand);
    } catch (error) {
      if (error.code ==23505){
        throw new BadRequestException('brand duplicated');
      }
      throw new InternalServerErrorException('error creating brand');
    }

  }

  findAll() {
    return this.brandRepository.find();
  }

  async findOne(id: string) {
        let brand: Brand | null = await this.brandRepository.findOneBy({id});

        if(brand === null)
            throw new NotFoundException(`brand with id ${id} not found`);
        return brand;
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
        let result = await  this.brandRepository.update(id, updateBrandDto);
        if (result.affected && result.affected < 1)
            throw new NotFoundException(`brand with id ${id} not found`);

        return this.findOne(id);

      /*const brand: Brand | undefined = await this.brandRepository.preload({
        id,
        ...updateBrandDto
      });

      if (!brand)
           throw new NotFoundException(`brand with id ${id} not found`);

      return this.brandRepository.save(brand); */
  }

  async remove(id: string) {
        await this.findOne(id);
        let result = await this.brandRepository.delete(id);

        if (result.affected && result.affected < 1)
            throw new NotFoundException(`brand with id ${id} not found`);

        return this.findAll();
  }
}
