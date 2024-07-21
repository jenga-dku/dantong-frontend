import SvgSprite from '@assets/svg/SvgSprite.svg';

export const SvgIcon = ({ id }: { id: string }) => {
  return (
    <svg width={430} height={430}>
      <use href={`${SvgSprite}#${id}`} />
    </svg>
  );
};
