import { useState } from 'react';
import { icons } from '../../../constants/icons';
import './checkbox.scss';

// ^======================== Checkbox ========================^ //

type CheckboxProps = {
  bemClass: string;
};

function Checkbox(checkboxProps: CheckboxProps): React.JSX.Element {

  const { bemClass } = checkboxProps;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className={`${bemClass} checkbox`}
      style={{
        backgroundImage: isChecked
          ? `url(${icons.checkboxChecked})`
          : `url(${icons.checkboxEmpty})`,
      }}
    >
      <input
        type='checkbox'
        name='checkbox'
        onChange={handleCheckboxChange}
      />
    </label>
  );
}
export default Checkbox;