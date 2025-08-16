'use client';

export const FOOTER_HEIGHT = 80;

const Footer = () => {
  return (
    <div
      className='mx-3 flex flex-col md:flex-row justify-between items-center md:items-center font-bold text-[#DBDBDB] gap-4 md:gap-0 py-4 md:py-0'
      style={{
        minHeight: FOOTER_HEIGHT,
      }}
    >
      <span className='text-center md:text-left'>2025 yuliya.tv</span>
      <ul className='flex flex-col md:flex-row gap-2 md:gap-8 text-center md:text-left'>
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
