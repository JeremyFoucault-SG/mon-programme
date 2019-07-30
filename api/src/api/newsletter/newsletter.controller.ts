import { Controller, Post, Get, Put, Delete, HttpCode, HttpStatus, Body, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse, ApiImplicitQuery, ApiImplicitHeader } from '@nestjs/swagger';
import { NewsletterModel } from './newsletter.model';
import { NewsletterDTO } from './newsletter.dto';
import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
@ApiUseTags('Newsletters')
export class NewsletterController {

    constructor(private readonly newsletterService: NewsletterService) { }

    @Post()
    @ApiBearerAuth()
    @ApiOperation({ title: 'Create new newsletter' })
    @ApiResponse({ status: 201, description: 'Return newsletter.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() newsletter: NewsletterDTO): Promise<NewsletterModel> {
        return this.newsletterService.insert(newsletter);
    }

    @Get(':id')
    @ApiOperation({ title: 'Get newsletter by ID' })
    @ApiResponse({ status: 200, description: 'Return newsletter.' })
    @ApiResponse({ status: 404, description: 'Not Found.' })
    async readOne(@Param('id') idNewsletter: string): Promise<NewsletterModel> {
        return this.newsletterService.findById(idNewsletter);
    }

    @Get()
    @ApiOperation({ title: 'Get all newsletters' })
    @ApiResponse({ status: 200, description: 'Return an array of newsletters.' })
    async readAll(): Promise<NewsletterModel[]> {
        return this.newsletterService.findAll();
    }

    @Put(':id')
    async update(@Param('id') idNewsletter: string, @Body() newsletter: NewsletterDTO): Promise<NewsletterModel> {
        return null;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') idNewsletter: string): Promise<void> {
        return null;
    }
}
