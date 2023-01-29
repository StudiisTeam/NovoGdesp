import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core'
import { GraphQLRequest } from 'apollo-server-types';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflactor: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const req = GqlExecutionContext.create(context).getContext().req;

    const userPermissions = req?.auth?.permissions || []
    const requiredPemissions = this.reflactor.get('permissions', context.getHandler()) || []
    const hasAllRequiredPermissions = requiredPemissions.every((permissions: any) => userPermissions.includes(permissions))

    if (requiredPemissions.length === 0 || hasAllRequiredPermissions) {
      return true;
    }

    throw new ForbiddenException('Insufficient Permissions')
  }
}