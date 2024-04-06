import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loader from '../components/Loader'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 letf-0 right-0 z-10 flex items-center justify-center'>
        popup
      </div> */}

      <Canvas
      className='w-full hscreen bg-transparent'
      camera={{near: 0.1, far: 2000}}
      >
        <Suspense fallback={<Loader />}>
          
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home
