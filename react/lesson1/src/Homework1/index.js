import {Message} from './components';

const text = 'Текст';

export const Homework = () => {
  return (
      <div>
        <h1>Homework</h1>
          <Message text={text}/>
      </div>
  );
};