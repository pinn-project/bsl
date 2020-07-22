import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm'

@Entity({ name: 'clicks' })
export default class Click {

  @PrimaryGeneratedColumn({
    type: 'smallint',
    name: 'id'
  })
  public id: number

  @Column({
    type: 'smallint',
    name: 'url_id'
  })
  @Index({ unique: false })
  public urlId: number

  @Column({
    type: 'text',
    name: 'user_ip'
  })
  public userIp: string

  @Column({
    type: 'text',
    name: 'description'
  })
  public description: string

  @Column({
    type: 'timestamp',
    default: new Date(),
    name: 'clicked_at'
  })
  public clickedAt: Date

}