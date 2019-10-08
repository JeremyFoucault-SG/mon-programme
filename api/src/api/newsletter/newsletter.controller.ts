import { Controller, Post, Body} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NewsletterModel } from './newsletter.model';
import { NewsletterService } from './newsletter.service';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from 'typegoose';

@Controller('newsletter')
@ApiUseTags('Newsletters')
export class NewsletterController {

    constructor(private readonly newsletterService: NewsletterService,
                @InjectModel(NewsletterModel) private readonly newsletterModel: ModelType<NewsletterModel>,
      ) { }

    @Post()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Create new newsletter' })
    @ApiResponse({ status: 201, description: 'Return newsletter.' })
    async newsletter(@Body() body) {
        const newsletter = new this.newsletterModel({ email: body.email });
        await newsletter.save();
    }
}
