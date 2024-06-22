interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
}

const Button: React.FC<ButtonProps> = ({ type, title }) => {
  return (
    <button
      type={type}
      className="bg-green-300 text-gray-900 font-semibold py-2 px-4 rounded-md hover:bg-green-400"
    >
      {title}
    </button>
  );
};

export default Button;
