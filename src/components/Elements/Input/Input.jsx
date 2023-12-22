import PropTypes from "prop-types";

export default function Input(props) {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-60"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
