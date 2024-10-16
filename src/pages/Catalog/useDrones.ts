import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { fetchDronesThunk } from '../../redux/drones/dronesOperations';
import { selectDrones } from '../../redux/drones/dronesSlice';

export default function useDrones() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDronesThunk());
  }, [dispatch]);

  const drones = useAppSelector(selectDrones);

  return drones;
}
