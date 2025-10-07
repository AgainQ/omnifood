// react
import { useQuery } from '@tanstack/react-query';
// 3d-party
import axios from 'axios';
// else
import type { StepT } from '../types/types';

export function useGetSteps() {
  // prettier-ignore
  const { data: steps, isLoading, error } = useQuery({
    queryKey: ['steps'],
    queryFn: fetchSteps,
  });

  return { steps, isLoading, error };

  // unnecessary
  // toasts make sense only for user actions (data mutations)
  // becasue it is attention grabbing
  // also toast provides nice feedback for user

  // useEffect(() => {
  //   if (isSuccess && steps) {
  //     toast.success('Successfully fetched steps', {
  //       description: `${steps.length} steps loaded`,
  //     });
  //   }
  // }, [isSuccess, steps]);

  // useEffect(() => {
  //   if (isError && error) {
  //     toast.error(error.message);
  //   }
  // }, [isError, error]);
}

async function fetchSteps() {
  const url = 'http://localhost:8000/steps';
  try {
    const { data } = await axios.get(url);
    return data as StepT[];
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      throw new Error('Failed to fetch Steps');
    }

    // if (axios.isAxiosError(err)) {
    //   throw new Error(err.response?.data?.message || 'Failed to fetch steps');
    // }
    // throw new Error('An unexpected error occurred');
  }
}
