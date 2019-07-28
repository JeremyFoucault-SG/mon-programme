import { HttpException, HttpStatus } from '@nestjs/common';

export class EntityException extends HttpException {
    code: EntityExceptionCode;
    constructor(code: EntityExceptionCode) {
        switch (code) {
            case EntityExceptionCode.NOT_FOUND:
                super(code, HttpStatus.NOT_FOUND);
                break;
            default:
                super('WTF', HttpStatus.NOT_IMPLEMENTED);
                break;
        }
        this.code = code;
    }
}

export enum EntityExceptionCode {
    NOT_FOUND = 'ENTITY_NOT_FOUND',
}
