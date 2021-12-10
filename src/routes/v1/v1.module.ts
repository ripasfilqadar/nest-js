import { Module } from '@nestjs/common';
import { Routes, RouterModule } from 'nest-router';

import AuthModule from './auth/auth.module';
import { SampleModule } from './samples/sample.module';
import UsersModule from './users/users.module';

const routes: Routes = [
  {
    path: '/v1',
    children: [
      { path: '/auth', module: AuthModule },
      { path: '/users', module: UsersModule },
    ],
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    AuthModule,
    UsersModule,
    SampleModule,
  ],
})
export default class V1Module {}
