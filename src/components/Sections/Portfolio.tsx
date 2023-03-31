/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable react-memo/require-usememo */
import 'yet-another-react-lightbox/styles.css';

import {FC, memo, useState} from 'react';
import Lightbox from 'yet-another-react-lightbox'; // requires a loader

import porfolioImage1 from '../../../public/images/blueplan-4.png';
import porfolioImage2 from '../../../public/images/blueplan-5.png';
import porfolioImage3 from '../../../public/images/blueplan-6.png';
import porfolioImage4 from '../../../public/images/lalilo-1.png';
import porfolioImage5 from '../../../public/images/lalilo-2.png';
import porfolioImage7 from '../../../public/images/moona-1.png';
import porfolioImage6 from '../../../public/images/moona-2.png';
import porfolioImage8 from '../../../public/images/moona-3.png';
import porfolioImage9 from '../../../public/images/renovationman-1.png';
import porfolioImage10 from '../../../public/images/syment-1.png';
import porfolioImage11 from '../../../public/images/syment-2.png';
import porfolioImage12 from '../../../public/images/syment-3.png';
import porfolioImage13 from '../../../public/images/syment-4.png';
import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import NextJsImage from '../NextJsImage';
import {PortfolioImage} from './PortfolioImage';

const Portfolio: FC = memo(() => {
  const [showCarousel, setShowCarousel] = useState(false);
  return (
    <>
      <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
        <div className="flex flex-col gap-y-8">
          <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
          <div className="w-full columns-2 md:columns-3 lg:columns-4">
            {portfolioItems.map((item, index) => {
              return <PortfolioImage item={item} key={`${item.title}-${index}`} setShowCarousel={setShowCarousel} />;
              // return (

              // );
            })}
          </div>
        </div>
      </Section>
      <Lightbox
        close={() => setShowCarousel(false)}
        open={showCarousel}
        render={{slide: NextJsImage}}
        slides={[
          porfolioImage1,
          porfolioImage2,
          porfolioImage3,
          porfolioImage4,
          porfolioImage5,
          porfolioImage6,
          porfolioImage7,
          porfolioImage8,
          porfolioImage9,
          porfolioImage10,
          porfolioImage11,
          porfolioImage12,
          porfolioImage13,
        ]}
      />
    </>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
