import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export const MenuContainer = ({
  menuList,
}: {
  menuList: {
    id: string;
    icon: JSX.Element;
    menuName: string;
  }[];
}) => {
  const navigate = useNavigate();
  return (
    <ul className="rounded-xl bg-white p-5 shadow-lg">
      {menuList.map(({ id, icon, menuName }, index) => (
        <Fragment key={id}>
          <li
            onClick={() => {
              navigate(`/${id.replaceAll('-', '/')}`);
            }}
            className="clickable flex cursor-pointer items-center gap-3"
          >
            <span className="text-2xl">{icon}</span>
            <p>{menuName}</p>
          </li>
          {index !== menuList.length - 1 && <hr className="my-3" />}
        </Fragment>
      ))}
    </ul>
  );
};
