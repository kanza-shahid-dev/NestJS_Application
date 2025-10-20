import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    // GqlExecutionContext.create(ctx).getContext().user,
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
