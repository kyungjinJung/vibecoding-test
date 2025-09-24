import LoadingSpinner from './components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <LoadingSpinner size="xl" text="Loading..." />
    </div>
  );
}
