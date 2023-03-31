import classNames from 'classnames';
import Image from 'next/image';
import {Dispatch, memo, SetStateAction, useEffect, useState} from 'react';

import {isMobile} from '../../config';
import {PortfolioItem} from '../../data/dataDef';

export const PortfolioImage: React.FC<{item: PortfolioItem; setShowCarousel: Dispatch<SetStateAction<boolean>>}> = memo(
  ({item, setShowCarousel}) => {
    // const [showModal, setShowModal] = useState(false);
    const {title, image} = item;
    return (
      <>
        <div className="pb-6" onClick={() => setShowCarousel(true)}>
          <div
            className={classNames(
              'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
            )}>
            <Image alt={title} layout="responsive" placeholder="blur" src={image} />

            <ItemOverlay item={item} />
          </div>
        </div>
        {/* {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 bg-gray-900 outline-none over focus:outline-none"
            onClick={() => setShowModal(false)}>
            <div className="relative w-full h-full mx-auto my-6 transition-all duration-300 bg-gray-900 w-">
              <div className="relative flex flex-col w-full h-full bg-transparent border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold text-white">{title}</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div style={{width: '100%', height: '80%', position: 'relative'}}>
                  <Image alt="Mountains" layout="fill" objectFit="contain" src={image} />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null} */}
      </>
    );
  },
);

const ItemOverlay: React.FC<{item: PortfolioItem}> = memo(({item: {title, description}}) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  return (
    <div
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:cursor-pointer hover:opacity-80': !mobile},
        'opacity-0',
      )}>
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
});
