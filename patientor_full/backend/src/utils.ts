import { NewPatientInfo, Gender } from "./types";
import { z } from 'zod';

export const NewPatientSchema = z.object({
  name: z.string(),
  ssn: z.string(),
  occupation: z.string(),
  dateOfBirth: z.string().date(),
  gender: z.nativeEnum(Gender),
});

export const toNewPatientInfo = (object: unknown): NewPatientInfo => {
  return NewPatientSchema.parse(object);
};
