import { PDFParse } from 'pdf-parse';

export const readPDF = async (file: File) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const parser = await new PDFParse({ data: buffer });
    return (await parser.getText()).text;
  } catch (err) {
    console.error('could not read from PDF', err);
  }
};
