import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type MealT } from '../types/types';

export function useGetMeals() {
  // prettier-ignore
  const {data: meals, isLoading, error} = useQuery({
    queryKey: ['meals'], 
    queryFn: fetchMeals
  })

  return { meals, isLoading, error };
}

async function fetchMeals() {
  const url = 'http://localhost:8000/meals';
  try {
    const { data } = await axios.get(url);
    return data as MealT[];
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      throw new Error('Failed to fetch Meals');
    }
  }
}
