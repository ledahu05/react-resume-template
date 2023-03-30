import classNames from 'classnames';
import Image from 'next/image';
import {memo, useEffect, useState} from 'react';

import {isMobile} from '../../config';
import {PortfolioItem} from '../../data/dataDef';

export const PortfolioImage: React.FC<{item: PortfolioItem}> = memo(({item}) => {
  const [showModal, setShowModal] = useState(false);
  const {title, image} = item;
  return (
    <>
      <div className="pb-6" onClick={() => setShowModal(true)}>
        <div
          className={classNames(
            'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
          )}>
          <Image alt={title} layout="responsive" placeholder="blur" src={image} />

          <ItemOverlay item={item} />
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="over fixed inset-0 z-50 flex items-center justify-center bg-gray-900 outline-none transition-all duration-300 focus:outline-none"
            onClick={() => setShowModal(false)}>
            <div className="w- relative mx-auto my-6 h-full w-full bg-gray-900 transition-all duration-300">
              {/*content*/}
              <div className="relative flex h-full w-full flex-col rounded-lg border-0 bg-transparent shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t p-5">
                  <h3 className="text-3xl font-semibold text-white">{title}</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div style={{width: '100%', height: '80%', position: 'relative'}}>
                  <Image alt="Mountains" layout="fill" objectFit="contain" src={image} />
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
});

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
