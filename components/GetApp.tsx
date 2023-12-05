import Image from 'next/image'
import React from 'react'

const GetApp = () => {
  return (
    <section className="max-container border-2 border-black">
      <div>
        <Image
          className="w-full get-app 2xl:rounded-5xl"
          src="/phones.png"
          alt="boat"
          width={1000}
          height={880}
        />
      </div>
    </section>
  );
}

export default GetApp