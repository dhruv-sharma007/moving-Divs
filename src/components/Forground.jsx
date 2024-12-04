import { useRef, useState } from "react";
import Card from "./Card";
import Inputbox from "./input";

function Forground() {
  const ref = useRef(null);
  const [cards, setCards] = useState([]);

  const handleAddCard = (newcard) => {
    setCards((prev) => [...prev, newcard]);
  }

  const handleDeleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div
      ref={ref}
      className=" p-5 fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap "
    >
      <Inputbox onAddCard={handleAddCard} />
      {cards.map((item) => (
        <Card key={item.id} data={item} onDelete={handleDeleteCard} reference={ref} />
      ))}
    </div>
  );
}

export default Forground;
