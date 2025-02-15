import type React from "react"

const NetworkBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <svg
        className="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {[...Array(15)].map((_, i) => (
          <g key={i} className="network-line">
            <path
              d={`M${1000 + Math.random() * 200} ${Math.random() * 1000} Q${500 + Math.random() * 500} ${Math.random() * 1000} ${-200 + Math.random() * 200} ${Math.random() * 1000}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              filter="url(#glow)"
            >
              <animate
                attributeName="d"
                values={`
                  M${1000 + Math.random() * 200} ${Math.random() * 1000} Q${500 + Math.random() * 500} ${Math.random() * 1000} ${-200 + Math.random() * 200} ${Math.random() * 1000};
                  M${1000 + Math.random() * 200} ${Math.random() * 1000} Q${500 + Math.random() * 500} ${Math.random() * 1000} ${-200 + Math.random() * 200} ${Math.random() * 1000}
                `}
                dur={`${Math.random() * 10 + 10}s`}
                repeatCount="indefinite"
              />
            </path>
            <circle
              cx={1000 + Math.random() * 200}
              cy={Math.random() * 1000}
              r="2"
              fill="currentColor"
              filter="url(#glow)"
            >
              <animate
                attributeName="cx"
                values={`${1000 + Math.random() * 200};${-200 + Math.random() * 200}`}
                dur={`${Math.random() * 10 + 10}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${Math.random() * 1000};${Math.random() * 1000}`}
                dur={`${Math.random() * 10 + 10}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default NetworkBackground

