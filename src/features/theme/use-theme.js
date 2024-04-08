import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setTheme} from './theme-slice';

export const useTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};
