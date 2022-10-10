export const Input = ({ name, label, error, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-bold text-grey-500 mb-2">
        {label}
      </label>
      <input
        {...props}
        name={name}
        id={name}
        className={`p-3 border border-bg-grey-700 rounded-xl focus:outline focus:outline-1 focus:outline-grey-700 ${
          error && "border - red - 300"
        }`}
      />
      <span className="p-2 text-sm text-red-300">{error}</span>
    </div>
  );
};
