import { Controller, Post, Body, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import * as shortid from 'shortid';
import { diskStorage } from 'multer';
import { ConfigService } from 'src/config/config.service';

@Controller('upload')
@ApiUseTags('upload')
export class UploadController {

    // tslint:disable-next-line: no-empty
    constructor( private readonly configService: ConfigService,
    ) {}

    @Post('')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
          cb(null, process.env.UPLOAD_PATH);
        },
        filename: (req, file, cb) => {
          const ext = extname(file.originalname);
          const name = file.originalname.replace(ext, '').replace(/ /g, '-');
          file.id = shortid.generate();
          cb(null, `${name}-${shortid.generate()}${extname(file.originalname)}`);
        },
      }),
    }))
    uploadFile(@UploadedFile() file, @Req() req) {
      return {
        id: file.id,
        index: req.body.index,
        url: `${this.configService.get('HOST_IMAGE')}/images/${file.filename}`,
      };
    }
}
