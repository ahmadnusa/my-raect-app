import PropTypes from "prop-types";

export default function Button(props) {
  const { text, classname = "bg-blue-600 w-full" } = props;
  return (
    <div className="mb-6">
      <button
        type="submit"
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white hover:bg-opacity-80`}
      >
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  classname: PropTypes.string,
};
