import '../../envConfig';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI as string);
    console.log('[DB CONNECTION OK]:', db.connection.name);
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? `[Database connection error] ${error.message}`
        : 'Unknown Error'
    );
  }
};
