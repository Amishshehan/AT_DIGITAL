const Button = ({
  label,
  backgroundColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-start gap-2 px-5 py-3 font-inter text-sm leading-[14px] font-bold tracking-[-0.28px] uppercase
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} `
          : "bg-secondary text-white "
      } rounded-[4px] ${fullWidth && "w-full"}`}
    >
      {label}
    </button>
  );
};

export default Button;