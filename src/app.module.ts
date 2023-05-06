import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/user';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "testuser",
    password: "testuser123",
    database: "nestjs-tutorial",
    entities: [User],
    synchronize: true
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
