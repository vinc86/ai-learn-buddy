import { NextResponse } from 'next/server';
export function validateFileContent(content: string) {
  if (!content) {
    return NextResponse({ error: 'Content is required', status: 400 });
  }

  if (typeof content !== 'string') {
    return NextResponse({
      error: 'Content imust be of type string',
      status: 400
    });
  }
}
