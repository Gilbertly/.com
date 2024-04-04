/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

const customLoader = (src: any) => {
  return src;
};

export default function NextImage(props: any) {
  return <Image {...props} loader={customLoader} />;
}
