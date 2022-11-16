import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';

@Entity()
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre_serie: string;

  @Column()
  clasificacion: string;

  @OneToMany(() => Asignacion, (asignacion: Asignacion) => asignacion.serie)
  asignacion: Asignacion[];
}
