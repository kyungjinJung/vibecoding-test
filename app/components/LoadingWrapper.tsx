'use client';

import { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LoadingWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
}

export default function LoadingWrapper({ 
  children, 
  fallback, 
  size = 'md', 
  text = 'Loading...' 
}: LoadingWrapperProps) {
  const defaultFallback = (
    <div className="flex justify-center items-center py-8">
      <LoadingSpinner size={size} text={text} />
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
}
