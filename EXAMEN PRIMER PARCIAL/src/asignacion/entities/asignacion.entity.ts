import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Serie } from 'src/serie/entities/serie.entity';
import { Personaje } from 'src/personaje/entities/personaje.entity';

@Entity()
export class Asignacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  papel: string;

  @Column()
  tipo_papel: string;

  @Column({ type: 'date' })
  fecha_inicio: Date;

  @Column({ type: 'date' })
  fecha_fin: Date;

  @Column()
  temporadas: number;

  @Column()
  serieId: number;

  @Column()
  personajeId: number;

  @ManyToOne(() => Serie, (serie: Serie) => serie.asignacion)
  // @JoinColumn({ name: 'serie_id' })
  serie: Serie;

  @ManyToOne(() => Personaje, (personaje: Personaje) => personaje.asignacion)
  // @JoinColumn({ name: 'personaje_id' })
  personaje: Personaje;
}
