import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column('varchar')
    name: string;

    @Column('varchar', {unique: true})
    email: string;    

    @Column('varchar')
    password: string;
    
    @Column('varchar', {array: true, default:['user']})
    roles: string; 

    @Column('bool', {default: true})
    isActive: boolean;
}
