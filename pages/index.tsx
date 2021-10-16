/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='select-none min-h-screen min-w-full bg-black text-white mx-auto p-2 overflow-hidden flex justify-center items-center'>
      <Head>
        <title>Muhammad Sayuti | Personal Website</title>
        <meta name='description' content='Hai, saya muhammad sayuti, saya adalah seorang junior mobile developer, saya sangat tertarik dalam pengembangan aplikasi mobile menggunakan flutter.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        {/* Navbar */}
        <nav className='relative max-w-5xl mx-auto'>
          {/* Logo */}
          <div className='md:absolute -bottom-24 flex text-xl xs:text-2xl '>
            <p>&#10100;&nbsp;</p>
            <p className='font-extrabold'>sayuti</p>
            <p className='text-green-400'>.codes</p>
            <p>&nbsp;&#10101;</p>
          </div>
        </nav>

        {/* Main Content */}
        <main className='relative'>
          <div className='md:flex justify-center items-center'>
            {/* Introduction text */}
            <article className='relative font-extrabold font-scheherazade'>
              <div className='absolute -top-10 text-6xl xs:text-7xl lg:-left-10 lg:-top-24'>
                <p className='text-white/5 lg:text-10xl'>Introduction</p>
              </div>
              <div className='flex mt-10 md:mt-3 ml-10 items-center justify-center'>
                <p className='text-green-400 text-9xl xs:text-10xl'>HI,</p>
                <div className='font-scheherazade text-4xl xs:text-5xl'>
                  <p>I&#39;m</p>
                  <p className='ml-2'>Sayuti.</p>
                </div>
              </div>
            </article>

            {/* Mobile */}
            <div className='relative bg-gray-900/40 w-[280px] h-[533px] mx-auto lg:mx-36 rounded-[50px] border-[12px] border-gray-700 mt-6'>
              <div className='flex flex-col justify-center items-center'>
                <div className='absolute -top-2 bg-gray-700 w-[100px] h-[20px] rounded-b-[8px]'></div>
                <div className='relative  h-[4px] w-[75px] bg-black/70 rounded-3xl'></div>
                <p className='mt-8 text-5xl text-gray-400'>{time}</p>
                <div className='mt-1 h-[2px] w-[80px] bg-gray-400 rounded-full'></div>

                <div className='absolute bottom-4 w-[32px] h-[32px] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125'>
                  <a
                    className='select-none'
                    href='https://github.com/sayutizxc'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={'/github.png'}
                      alt='github logo'
                      height='32px'
                      width='32px'
                      draggable='false'
                    />
                  </a>
                </div>
              </div>

              <div className='relative mt-2'>
                <p className='absolute  -left-10 mt-10 text-green-400 font-bold font-scheherazade text-5xl bg-gray-800/50 px-3 py-1 rounded-xl backdrop-filter backdrop-blur-sm animate-scale'>
                  Mobile
                </p>

                <p className='absolute -right-10 mt-28 text-gray-200 font-bold font-scheherazade text-6xl bg-gray-800/50 px-3 py-1 rounded-xl backdrop-filter backdrop-blur-sm'>
                  Developer
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

function getTime(): string {
  let date: Date = new Date();
  let hours: string =
    date.getHours() > 9
      ? date.getHours().toLocaleString()
      : '0' + date.getHours().toLocaleString();
  let minutes: string =
    date.getMinutes() > 9
      ? date.getMinutes().toLocaleString()
      : '0' + date.getMinutes().toLocaleString();
  return hours + ':' + minutes;
}

export default Home;
