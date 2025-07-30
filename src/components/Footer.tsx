'use client';

export const FOOTER_HEIGHT = 80;

const Footer = () => {
  return (
    <div
      className='mx-3 flex justify-between items-center font-bold text-[#DBDBDB]'
      style={{
        height: FOOTER_HEIGHT,
      }}
    >
      <span>2025 yuliya.tv</span>
      <ul className='flex gap-8'>
        <li>
          <a href='mailto:yuliya.tverdohlib@gmail.com'>Email</a>
        </li>
        <li>
          <a href='https://www.behance.net/yuliyatverbafe'>Behance</a>
        </li>
        <li>
          <a href='https://www.instagram.com/julin_designs/#'>Instagram</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
