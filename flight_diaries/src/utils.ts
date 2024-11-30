import { Weather, Visibility } from './types';
import { z } from 'zod'; // schema validation library that works well with TypeScript

// // all these type guards and parser functions replaced by use of zod
// const isString = (text: unknown): text is string => {
//   return typeof text === 'string' || text instanceof String;
// };

// const parseComment = (comment: unknown): string => {
//   if (!isString(comment)) {
//     throw new Error('Incorrect or missing comment');
//   }

//   return comment;
// };

// const isDate = (date: string): boolean => {
//   return Boolean(Date.parse(date));
// };

// const parseDate = (date: unknown): string => {
//   if (!isString(date) || !isDate(date)) {
//     throw new Error('Incorrect or missing date: ' + date);
//   }
//   return date;
// };

// const isWeather = (param: string): param is Weather => {
//   return Object.values(Weather).map(v => v.toString()).includes(param);
// };

// const parseWeather = (weather: unknown): Weather => {
//   if (!isString(weather) || !isWeather(weather)) {
//       throw new Error('Incorrect or missing weather: ' + weather);
//   }
//   return weather;
// };

// const isVisibility = (param: string): param is Visibility => {
//   return Object.values(Visibility).map(v => v.toString()).includes(param);
// };

// const parseVisibility = (visibility: unknown): Visibility => {
//   if (!isString(visibility) || !isVisibility(visibility)) {
//       throw new Error('Incorrect or missing visibility: ' + visibility);
//   }
//   return visibility;
// };

// Zod object schema:
export const NewEntrySchema = z.object({
  weather: z.nativeEnum(Weather),
  visibility: z.nativeEnum(Visibility),
  date: z.string().date(),
  comment: z.string().optional()
});

// // we can get rid of this altogether, actually, and just call the Zod-parser
// // directly in the route handler
// export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
//   // calling parse of a Zod object schema
//   return newEntrySchema.parse(object);

//   // // replaces
//   // if ( !object || typeof object !== 'object' ) {
//   //   throw new Error('Incorrect or missing data');
//   // }

//   // if ('comment' in object && 'date' in object && 'weather' in object && 'visibility' in object)  {
//   //   const newEntry: NewDiaryEntry = {
//   //     weather: z.nativeEnum(Weather).parse(object.weather),
//   //     visibility: z.nativeEnum(Visibility).parse(object.visibility),
//   //     date: z.string().date().parse(object.date),
//   //     comment: z.string().optional().parse(object.comment)
//   //   };

//   //   return newEntry;
//   // }

//   // throw new Error('Incorrect data: some fields are missing');
// };
