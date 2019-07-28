import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { NewsletterModel } from './newsletter.model';
import { NewsletterDTO } from './newsletter.dto';

@Controller('newsletter')
export class NewsletterController {

    @Post()
    async create(@Body() newsletter: NewsletterDTO): Promise<NewsletterModel> {
        return null;
    }

    @Get(':id')
    async readOne(@Param('id') idNewsletter): Promise<NewsletterModel> {
        return null;
    }

    @Get()
    async readAll(): Promise<NewsletterModel> {
        return null;
    }

    @Put(':id')
    async update(@Param('id') idNewsletter: string, @Body() newsletter: NewsletterDTO): Promise<NewsletterModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idNewsletter): Promise<void> {
        return null;
    }
}
