import c from './FilterProduct.module.scss';

type ActionButtonsProps = {
  onClear: () => void;
};

export const ActionButtons = ({ onClear }: ActionButtonsProps) => {
  return (
    <div className={c.buttons}>
      <button className={c.buttons__apply}>Apply</button>
      <button className={c.buttons__clear} onClick={onClear}>
        Clear
      </button>
    </div>
  );
};
