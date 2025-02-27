import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import router from './routes/routes';
import { StepperProvider } from './providers/StepperProvider'; 
import AuthProvider from './auth/AuthContext';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <StepperProvider>
            <RouterProvider router={router} />
            <Toaster />
          </StepperProvider>
        </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
