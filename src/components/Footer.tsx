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
          <a href='#'>Email</a>
        </li>
        <li>
          <a href='#'>Behance</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
