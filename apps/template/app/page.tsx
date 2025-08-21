import { Button } from '@valesco/ui/components/button';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Valesco Template App
        </h1>
        <p className='text-lg text-gray-600 mb-8'>
          This is the base template for client applications
        </p>
        <div className='bg-white rounded-lg shadow-md p-6 max-w-md mx-auto'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Features</h2>
          <ul className='text-left text-gray-600 space-y-2'>
            <li>✅ Next.js 15 with App Router</li>
            <li>✅ TypeScript configuration</li>
            <li>✅ Shared package integration</li>
            <li>✅ Monorepo structure</li>
            <li>✅ Vercel deployment ready</li>
          </ul>
          <Button size='sm'>Button</Button>
        </div>
      </div>
    </div>
  );
}
