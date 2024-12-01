import axios from 'axios';

import {
  NonSensitiveDiaryEntry,
  NewDiaryEntry,
  DiaryEntry,
} from '../../flight_diaries/src/types';

const baseUrl = 'http://localhost:3000/api/diaries'

const getDiaries = async () => {
  const response = await axios.get<NonSensitiveDiaryEntry[]>(`${baseUrl}`);
  const entries: NonSensitiveDiaryEntry[] = await response.data;
  return entries;
}

const addDiary = async (newEntry: NewDiaryEntry) => {
  const response = await axios.post<DiaryEntry>(`${baseUrl}`, newEntry);
  const addedDiary: DiaryEntry = await response.data;
  return addedDiary;
}

export default {
  getDiaries,
  addDiary,
};
