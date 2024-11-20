export default function CardMusic({ params, author }) {
  return (
    <div className="bg-blue-200">
      <p>{author}</p>
      <div className="w-full h-[100px] flex items-center justify-center bg-orange-200">
        <p>{params.image}</p>
      </div>
      <div className="p-2">
        <h1>{params.title}</h1>
        <p>{params.desc}</p>
      </div>
    </div>
  );
}
