import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-white mb-4'>404 - Page Not Found</h1>
        <p className='text-xl text-gray-200 mb-8'>
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href='/'
          className='inline-block bg-primary text-indigo-900 font-semibold py-2 px-4 rounded-full hover:bg-primary-light transition-colors duration-300'
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}
