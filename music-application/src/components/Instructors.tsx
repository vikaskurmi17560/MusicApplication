'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Vikas Kurmi',
      designation: 'Guitar Instructor',
      image:
        'https://res.cloudinary.com/dplwgsngu/image/upload/v1732371530/uvs9ln32r2h5p3cuxeav.jpg',
    },
    {
      id: 2,
      name: 'Elena Briggs',
      designation: 'Vocal Coach',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Piano Teacher',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'Rohit Chand',
      designation: 'Drumming Expert',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors