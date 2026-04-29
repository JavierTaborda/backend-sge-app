import { Injectable } from '@nestjs/common';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';

@Injectable()
export class ReturnsImageStorageService {
    private readonly baseDir: string;

    constructor() {
        this.baseDir = process.env.IMAGES_ROUTE_DEVOLUCION || '';
    }

    private async ensureDirectoryExists(directory: string) {
        await mkdir(directory, { recursive: true });
    }

    async downloadWebpImage(url: string): Promise<string> {
        if (!url) {
            throw new Error('Image URL not provided.');
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to download image ${url}: ${response.status} ${response.statusText}`);
        }

        const buffer = Buffer.from(await response.arrayBuffer());

        await this.ensureDirectoryExists(this.baseDir);

        const urlObj = new URL(url);
        const pathname = urlObj.pathname;
        let filename = path.basename(pathname);
        if (!filename.endsWith('.webp')) {
            filename += '.webp';
        }

        const filePath = path.join(this.baseDir, filename);
        await writeFile(filePath, buffer);
        return filename;
    }
}
