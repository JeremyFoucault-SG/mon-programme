import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { unlink } from 'fs';

@Injectable()
export class UploadService {
  // tslint:disable-next-line: no-empty
  constructor(private readonly configService: ConfigService) {}

  async removePhoto(photo: {id: string, index: number, url: string}) {
    unlink(`${this.configService.get('UPLOAD_PATH')}/${photo.url.split('/').pop()}`, (err) => console.log(err));
  }

  async removePhotos(photos: Array<{ id: string, index: number, url: string }>) {
    photos.forEach(photo => {
      unlink(`${this.configService.get('UPLOAD_PATH')}/${photo.url.split('/').pop()}`, (err) => console.log(err));
    });
  }
}
