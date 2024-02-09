import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col items-center justify-center pb-8 last:pb-0 md:items-start ">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="hidden flex-1 text-sm font-medium italic sm:flex-none md:flex">{location}</span>
          <span className="hidden md:block">•</span>
          <span className="my-1 flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        <div className="text-left">{content}</div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
