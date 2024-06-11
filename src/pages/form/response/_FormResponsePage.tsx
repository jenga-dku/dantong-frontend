import { useEffect } from 'react';
import { useTopBarStore } from '../../../stores/topBar-stores';

export const FormResponsePage = () => {
  const { setIsBackButtonVisible, setIsNotificationButtonVisible } =
    useTopBarStore();
  useEffect(() => {
    setIsBackButtonVisible(true);
    setIsNotificationButtonVisible(false);
  }, []);

  return <>hi</>;
};
