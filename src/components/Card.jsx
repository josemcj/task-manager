import Button from './Button';

function Card({ title, description, onClick = () => null }) {
  return (
    <div className="p-8 border border-gray-300 rounded-2xl">
      <div className="mb-2">
        <h3 className="font-bold text-xl">{title}</h3>
      </div>

      <div className="mb-3">
        <div className="text-gray-500">{description}</div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onClick}>Editar</Button>
      </div>
    </div>
  );
}

export default Card;
