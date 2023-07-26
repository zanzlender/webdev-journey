import Image from "next/image";
import tw from "twin.macro";

export default function SomeComponent({ params }: { params: { id: string } }) {
  return <div className="w-full h-80 bg-teal-500">{params.id}</div>;
}
