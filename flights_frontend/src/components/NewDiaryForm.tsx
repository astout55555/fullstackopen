import useField from '../hooks/useField';

import {
  NewDiaryEntry,
  Visibility,
  Weather,
} from '../../../flight_diaries/src/types';

import {
  NewDiaryFormProps,
} from '../types';

const NewDiaryForm = ({ createDiary }: NewDiaryFormProps) => {
  const dateField = useField('date');
  const visibilityField = useField('text'); // replace with radio options
  const weatherField = useField('text'); // replace with radio options
  const commentField = useField('text');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newDiary: NewDiaryEntry = {
      date: dateField.value,
      visibility: visibilityField.value as Visibility, // assuming good input
      weather: weatherField.value as Weather,
      comment: commentField.value,
    };
    createDiary(newDiary);
  }

  return (
    <div>
      <h1>Add new entry</h1>
      <form onSubmit={handleSubmit}>
        date <input {...dateField} /> <br/>
        visibility <input {...visibilityField} /> <br/>
        weather <input {...weatherField} /> <br/>
        comment <input {...commentField} /> <br/>
        <button type="submit">add</button>
      </form>
    </div>
  )
};

export default NewDiaryForm;