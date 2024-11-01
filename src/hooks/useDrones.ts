import { useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';
import { fetchDronesThunk } from '../redux/drones/dronesOperations';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function useDrones() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDronesThunk());
  }, [dispatch]);

  // const drones = useAppSelector(selectDrones);
  const drones = useSelector((state: RootState) => state.drones)

  return drones;
}
