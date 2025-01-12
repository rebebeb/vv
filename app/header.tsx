import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Decentralized Health Monitoring.',
    description:
      'Tracks health metrics in real-time, securely storing data on the blockchain, ensuring privacy and control for users.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Smart Contract-Based Emergency Alerts.',
    description: 'Automatically triggers emergency responses through smart contracts, alerting medical professionals or authorities instantly when needed.',
    icon: LockClosedIcon,
  },
  {
    name: 'Immutable Health Records.',
    description: 'Uses blockchain technology to store and verify health data, ensuring accurate, unalterable records for users and providing transparency in medical care.',
    icon: ServerIcon,
  },
]

export default function Header() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-gray-700"></h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                $ASTHMATIC Agent Model 
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
At 50k Market Cap, the agent gains the ability to "breathe air," symbolizing a critical milestone, and the AI bot will be publicly released.

The $ASTHMATIC Agent is a visionary, fictional life-saving assistant inspired by the legacy of George Floyd. Designed to provide immediate support during moments of physical distress, this innovative tool offers real-time health monitoring and emergency intervention. By addressing critical situations with precision and urgency, the $ASTHMATIC Agent seeks to raise awareness about health disparities, promote justice, and ultimately save lives—bringing hope and action to those in need













              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-gray-500" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://cdn.discordapp.com/attachments/1160456374208188477/1326959550145761383/A07DE722-60C3-4C67-B734-ABD2A51210E4.jpg?ex=678152e2&is=67800162&hm=7cdf354852df06b2d740badcced68c2d7b3e3ead7ba9560ccbc274198a29ed07&"
            width={1000}
            height={200}
            className="w-[14rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[43.5rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
