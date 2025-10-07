// react
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 3d party
import { Toaster } from 'sonner';
// pages
import HomePage from './Pages/HomePage';
import MealsPage from './Pages/MealsPage';
import PricingPage from './Pages/PricingPage';
import TryPage from './Pages/TryPage';
import TestimonialsPage from './Pages/TestimonialsPage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Toaster position='top-center' visibleToasts={5} richColors expand />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='meals' element={<MealsPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path='testimonials' element={<TestimonialsPage />} />
        <Route path='try' element={<TryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
