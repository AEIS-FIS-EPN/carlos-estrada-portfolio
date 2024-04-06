import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loader from '../components/Loader'
import {Island} from '../models/Island'
import HomeInfo from '../components/HomeInfo'

const Home = () => {

  const adjustIslandForScreenSize = () => {
    let screenScale=null;
    let screenPosition= [0, -6.5, -43.4];
    let rotation = [0.1, 4.8 , 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-28 letf-0 right-0 z-10 flex items-center justify-center'>
        popup
      </div> */
      
      
      }

   
      <HomeInfo />
      
      <Canvas
      className='w-full hscreen bg-transparent'
      camera={{near: 0.1, far: 2000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight/>

          <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home
