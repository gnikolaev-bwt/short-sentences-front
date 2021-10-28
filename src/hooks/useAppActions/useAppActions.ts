import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions } from 'src/store';

export const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
