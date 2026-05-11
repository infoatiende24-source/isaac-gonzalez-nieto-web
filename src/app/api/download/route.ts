import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'download', 'isaac-nieto-landing.zip');
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="isaac-nieto-landing.zip"',
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch {
    return new NextResponse('Archivo no encontrado', { status: 404 });
  }
}
