import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherResolver } from './teacher.resolver';
import { HttpModule } from '@nestjs/axios';
import { AuthenticationModule } from '../authentication/authentication.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [HttpModule, AuthenticationModule,
    ClientsModule.register([{
      name: 'TEACHER_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'teacherCreate',
        queueOptions: {
          durable: true
        },
      }
    },
    ]),],
  providers: [TeacherResolver, TeacherService],
})
export class TeacherModule { }
