export const setInputChange = <T>(
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setter: React.Dispatch<React.SetStateAction<T>>,
) => {
  const { name, value } = event.target;
  setter((prevState) => ({ ...prevState, [name]: value }));
};
