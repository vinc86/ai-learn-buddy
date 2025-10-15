import '../../../envConfig';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

export const geminiAI = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
  model: 'gemini-2.5-flash',
  temperature: 0
});
