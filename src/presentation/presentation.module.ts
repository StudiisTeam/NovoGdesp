import { Module } from '@nestjs/common';
import { ResolverModule } from './resolvers/resolver.module';

@Module({
  imports: [
    ResolverModule
  ]
})
export class PresentationModule { }
