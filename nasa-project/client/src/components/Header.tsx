import { PropsWithChildren } from 'react';

const Header = ({ children }: PropsWithChildren) => {
  return <div className="flex justify-center rounded bg-gray-200 p-4">{children}</div>;
};

export default Header;
