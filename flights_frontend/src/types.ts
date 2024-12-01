import {
  NewDiaryEntry,
} from '../../flight_diaries/src/types';

export type CreateDiaryType = (arg0: NewDiaryEntry) => Promise<void>;

export interface NewDiaryFormProps {
  createDiary: CreateDiaryType,
}
