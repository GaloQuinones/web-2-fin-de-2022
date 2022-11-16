import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';

@Entity()
export class Personaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre_personaje: string;

  @Column()
  anio_experiencia: number;

  @OneToMany(() => Asignacion, (asignacion: Asignacion) => asignacion.personaje)
  asignacion: Asignacion[];
}
