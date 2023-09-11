import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

/* Import Types */
import Props from './types/props';

/* import SVGs */
import Phone from './images/phone.svg';
import AtDesk from './images/at-desk.svg';
import Available from './images/available.svg';
import Blushing from './images/blushing.svg';
import Skills from './images/skills.svg';
import Smile from './images/smile.svg';
import Beach from './images/beach.svg';

/* import styles */
import styles from './styles.module.scss';

/* Render component */
export const MiniMe: React.FC<Props> = ({
  name,
  width,
  position,
  classes
}: Props) => {
  const selectMiniMe = (name: string): any => {
    switch (name) {
      case 'available':
        return (
          <Image
            priority
            src={Available}
            alt="A cartoon of me, waving and smiling"
          />
        );
      case 'at-desk':
        return (
          <Image
            priority
            src={AtDesk}
            alt="A cartoon of me, sittng at my desk and working"
          />
        );
      case 'blushing':
        return (
          <Image priority src={Blushing} alt="A cartoon of me, blushing" />
        );
      case 'skills':
        return (
          <Image
            priority
            src={Skills}
            alt="A cartoon of me, gesturing to a panel"
          />
        );
      case 'phone':
        return (
          <Image priority src={Phone} alt="A cartoon of me, on the phone" />
        );
      case 'beach':
        return (
          <Image
            priority
            src={Beach}
            alt="A cartoon of me, in a swimsuit with an inflatable duck"
          />
        );
      case 'smile':
      default:
        return <Image priority src={Smile} alt="A cartoon of me, smiling" />;
    }
  };

  return (
    <div className={cx(styles['mini-me'], styles[`w-${width}`], classes)}>
      {selectMiniMe(name)}
    </div>
  );
};

export default MiniMe;
