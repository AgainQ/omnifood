import { useQuery } from '@tanstack/react-query';
import type { TestimonialT } from '../types/types';
import axios from 'axios';

export function useGetTestimonials() {
  // prettier-ignore
  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  });

  return { testimonials, isLoading, error };
}

async function fetchTestimonials() {
  const url = 'http://localhost:8000/testimonials';
  try {
    const { data } = await axios.get(url);
    return data as TestimonialT[];
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      throw new Error('Failed to fetch Testimonials');
    }
  }
}
