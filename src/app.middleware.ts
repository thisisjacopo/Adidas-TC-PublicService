import { HttpService, Injectable, NestMiddleware } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { NextFunction } from 'express';

@Injectable()
export class BearerMiddleware implements NestMiddleware {
    constructor(private httpService: HttpService) {}
    use(request: Request, response: Response, next: NextFunction) {
    const token: string = sign(
        {
        origin: 'publicservice',
        resource: '/subscriptions',
        },
    process.env.SECRETKEY,
    { expiresIn: "356d" },
    )

    this.httpService.axiosRef.interceptors.request.use((req) => {
    req.headers = {
        authorization: `Bearer ${token}`,
    };

    return req;
    })

    return next()
    }
}