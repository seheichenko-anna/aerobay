interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <button
      type={type}
      className="bg-green-300 text-gray-900 font-semibold py-2 px-4 rounded-md hover:bg-green-400"
    >
      {children}
    </button>
  );
};

export default Button;
