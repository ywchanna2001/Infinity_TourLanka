import { CheckIcon } from '@heroicons/react/24/solid' //command : npm install @heroicons/react

const steps = [
  { id: '01', name: 'Personal Information', href: '#', status: 'complete' },
  { id: '02', name: 'Travel Information', href: '#', status: 'complete' },
  { id: '03', name: 'Upload Document', href: '#', status: 'current' },
  { id: '04', name: 'Make Payment', href: '#', status: 'upcoming' },
]

function VisaProcessingProgressBar() {
  return (
    <nav aria-label="Progress" className='m-4'>
      <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            {step.status === 'complete' ? (
              <a href={step.href} className="group flex w-full items-center">
                <span className="flex items-center px-6 py-2 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 group-hover:bg-green-800">
                    <CheckIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                  </span>
                  <span className="ml-4 text-sm font-medium text-white">{step.name}</span>
                </span>
              </a>
            ) : step.status === 'current' ? (
              <a href={step.href} className="flex items-center px-6 py-2 text-sm font-medium" aria-current="step">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-green-600">
                  <span className="text-green-600">{step.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-white-600">{step.name}</span>
              </a>
            ) : (
              <a href={step.href} className="group flex items-center">
                <span className="flex items-center px-6 py-2 text-sm font-medium">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-white-300 group-hover:border-white-400">
                    <span className="text-white-500 group-hover:text-white-900">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-white-500 group-hover:text-white-900">{step.name}</span>
                </span>
              </a>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div className="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                  <svg
                    className="h-full w-full text-white-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
export default VisaProcessingProgressBar;