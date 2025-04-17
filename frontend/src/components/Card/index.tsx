import { CardProps } from "@typelib/components";

const Card = ({ children, style, draggable = false, id }: CardProps) => {
  return (
    <div
      className={`${style} flex flex-col rounded-md shadow p-2`}
      draggable={draggable}
      id={id.toString()}
    >
      {children}
    </div>
  );
};

export default Card;
