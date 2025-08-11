import type React from "react"

const MonochromeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden">
      {/* Sophisticated grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                 radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)
               `,
               backgroundSize: '100px 100px, 100px 100px, 50px 50px'
             }} 
        />
      </div>
      
      {/* Dynamic geometric elements */}
      <div className="absolute inset-0">
        {/* Large decorative circles */}
        <div className="absolute -top-40 -left-40 w-96 h-96 border border-white border-opacity-[0.03] rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] border border-white border-opacity-[0.02] rounded-full"></div>
        
        {/* Angular geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white border-opacity-[0.04] rotate-45 transform origin-center"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-white border-opacity-[0.03] rotate-12"></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-[0.02] transform rotate-12 origin-top"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-[0.02] transform -rotate-12 origin-top"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/3 left-10 w-1 h-1 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-white opacity-10 rounded-full"></div>
        
        {/* Subtle text overlay */}
        <div className="absolute bottom-8 right-8 text-white opacity-[0.02] text-xs font-mono transform rotate-90 origin-bottom-right">
          RIDWAN MOHAMED • FULL STACK DEVELOPER
        </div>
      </div>
    </div>
  )
}

export default MonochromeBackground

