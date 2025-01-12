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
adi @6di on discord rugged this coin, please swat hiim














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
            src="https://media.discordapp.net/attachments/879113849297588235/1327874587836285029/A07DE722-60C3-4C67-B734-ABD2A51210E4.png?ex=6784a714&is=67835594&hm=b470f3efa4b6f84a9fb39e17b25a8badde7dcfe7ea90ee0202841d9bc2d866f3&=&format=webp&quality=lossless&width=1266&height=1266"
            width={1000}
            height={200}
            className="w-[14rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[43.5rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
