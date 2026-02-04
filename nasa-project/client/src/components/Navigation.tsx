export type NavOption = 'dashboard' | 'modal' | 'profile';

export type NavItem = {
  name: NavOption;
  label: string;
};

export type NavigationBarProps = {
  items: NavItem[];
  tab: NavItem;
  handleNavClick: (item: NavItem) => void;
};

const NavigationBar = ({ items, tab, handleNavClick }: NavigationBarProps) => {
  return (
    <div className="my-4 flex w-full flex-col">
      {items.map(({ name, label }) => (
        <div
          key={name}
          className={
            'mb-2 cursor-pointer rounded px-2 py-1 hover:bg-blue-200 ' +
            (tab.name === name ? 'bg-blue-200 font-semibold' : '')
          }
          onClick={() => handleNavClick({ name, label })}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
