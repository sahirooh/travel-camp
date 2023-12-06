import Image from 'next/image'
import Buttons from './Buttons';

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className='z-20 flex flex-col flex-1 w-full items-start
        justify-center gap-10 '>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get For Free Now!</h2>
          <p className='text-gray-10'>Available on iOS and Android, Download Now</p>

          <div className='flex gap-4 flex-col xl:flex-row whitespace-nowrap w-full'>
            <Buttons 
            type="button"
            title="App Store"
            icon='/apple.svg'
            variant='btn_white' 
            full />

            <Buttons 
            type="button"
            title="Play Store"
            icon='/android.svg'
            variant='btn_dark_green' 
            full />

          </div>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
}

export default GetApp