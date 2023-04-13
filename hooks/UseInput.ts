import {useState, useCallback, ChangeEvent} from 'react';
type UserInputProps = [
  string,
  (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  () => void,
];
const UseInput = (initialValue: string): UserInputProps => {
  const [userFormInput, setUserFormInput] = useState(initialValue);

  const onChangeForm = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setUserFormInput(event.target.value);
    },
    [],
  );

  const init = useCallback(() => {
    setUserFormInput('');
  }, []);

  return [userFormInput, onChangeForm, init];
};
export default UseInput;
