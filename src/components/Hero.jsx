"use client";

import { SiRottentomatoes } from "react-icons/si";
import { FaImdb } from "react-icons/fa";

const ImageWithFixedHeight = ({ imageUrl }) => {
  return (
    <div style={{ height: '700px' }}>
      <img
        className="h-full w-full rounded-lg object-cover"
        src={imageUrl}
        alt=""
      />
    </div>
  );
};

function Photos() {

  return (
    <div className="mt-2 pb-12 grid grid-cols-2 md:grid-cols-5 gap-4 px-6 sm:px-8">
      <div className="-mt-8">
        <ImageWithFixedHeight
          imageUrl="/assets/main-hero-1.webp"
        />
      </div>
      <ImageWithFixedHeight
        imageUrl="/assets/main-hero-2.webp"
      />
      <div className="mt-8">
        <ImageWithFixedHeight
          imageUrl="/assets/main-hero-3.webp"
        />
      </div>
      <ImageWithFixedHeight
        imageUrl="/assets/main-hero-4.webp"
      />
      <div className="-mt-8">
        <ImageWithFixedHeight
          imageUrl="/assets/main-hero-5.webp"
        />
      </div>
    </div>
  )
}

export default function Example() {

  return (
    <div className="bg-[#f7f6ed]">
      <div className="relative isolate">
        <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-32 pb-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-[#333333] sm:text-6xl">
              M*A*S*H
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              One of the most successful films of the 1970s, M*A*S*H is a timeless classic that captures the absurdity of war with an irreverent sense of humor.
            </p>
            <div className="flex gap-2 mt-4 mx-auto justify-center items-center">
              <a href="https://www.imdb.com/title/tt0066026/">
                <FaImdb className="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors" aria-hidden="true" />
              </a>
              <a href="https://www.rottentomatoes.com/m/mash">
                <SiRottentomatoes className="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="fadeInUp-animation">
          <Photos />
        </div>
      </div>
    </div>
  )
}
