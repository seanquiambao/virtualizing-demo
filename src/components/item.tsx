interface props {
  name: string;
}

const Item = ({ name }: props) => {
  return <div className="bg-blue-800 p-5 text-4xl text-white">{name}</div>;
};

export default Item;
