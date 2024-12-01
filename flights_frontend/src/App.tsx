import { useState, useEffect } from 'react';
import diaryService from './diaryService';
import NewDiaryForm from './components/NewDiaryForm';
import { isAxiosError } from 'axios';

// import {
// 	Routes,
// 	Route,
// 	Link,
// 	Navigate,
// 	useParams,
// 	useNavigate,
// } from "react-router-dom";

import {
  NonSensitiveDiaryEntry,
  NewDiaryEntry,
  DiaryEntry,
} from '../../flight_diaries/src/types';

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  const notifyWith = (message: string) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 6000) 
  }

  useEffect(() => {
    diaryService.getDiaries()
      .then(entries => setDiaries(entries))
      .catch (error => {
        if (isAxiosError(error)) {
          console.log(error.status);
          console.error(error.response);
        } else {
          console.error(error);
        }
    });
  }, []);

  const createDiary = async (newEntry: NewDiaryEntry) => {
    try {
      const addedDiary: DiaryEntry = await diaryService.addDiary(newEntry);
      setDiaries(diaries.concat(addedDiary));
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          console.error(error.response.data.error);
          notifyWith('One or more erros in input, check console for details...')
        } else {
          notifyWith('Addition failed, reason unknown...');
        }
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      {error && <div style={{ color: 'red', marginBottom: 10} }>{error}</div>}
      <NewDiaryForm createDiary={createDiary} />
      <h1>Diary entries</h1>
      {diaries.map(diary => {
        return (
          <div key={diary.id}>
            <h2>{diary.date}</h2>
            visibility: {diary.visibility} <br/>
            weather: {diary.weather}
          </div>
        );
      })}
    </>
  );
}

export default App;
