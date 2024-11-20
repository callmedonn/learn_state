export default function ButtonStyleOne({ target }) {
  return (
    <button
      onClick={target}
      className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-transparent hover:text-gray-600 border border-2 border-gray-600"
    >
      <p>Klik Disini</p>
    </button>
  );
}
