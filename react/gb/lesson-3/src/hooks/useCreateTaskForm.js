import { useCallback, useState } from "react";

export const useCreateTaskForm = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState();

    const resetInputValue = useCallback(
        () => {setInputValue('')},[]
      );

      const onChangeInput = useCallback((event) => {
        setInputValue(event.target.value)
      }, [])

      const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onSubmit(inputValue)
        resetInputValue();
      }, [resetInputValue, inputValue, onSubmit])

      return {
          inputValue,
          handleSubmit,
          resetInputValue,
          onChangeInput,
      }
}