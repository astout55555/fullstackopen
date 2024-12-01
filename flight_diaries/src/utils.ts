import { Weather, Visibility, NewDiaryEntry } from './types';
import { z } from 'zod'; // schema validation library that works well with TypeScript

// Zod object schema:
export const NewEntrySchema = z.object({
  weather: z.nativeEnum(Weather),
  visibility: z.nativeEnum(Visibility),
  date: z.string().date(),
  comment: z.string().optional()
});

export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  return NewEntrySchema.parse(object);
};
