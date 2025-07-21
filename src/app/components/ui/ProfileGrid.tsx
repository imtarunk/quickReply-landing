import Image from 'next/image';
import Ellipse8 from "../../../../public/Ellipse-8.png";
import Ellipse9 from "../../../../public/Ellipse-9.png";
import Frame129 from "../../../../public/Frame129.png";
import pic1 from "../../../../public/pic1.jpg";

type Person = {
  src: typeof Frame129;
  indicator?: boolean;
  label?: string;
} | null;

const people: Person[][] = [
  [
    { src: pic1, indicator: true },
    { src: Ellipse8 },
    { src: Ellipse9 },
    null
  ],
  [
    null,
    null,
    { src: pic1, indicator: true },
    { src: Ellipse8, indicator: true }
  ]
];

export default function ProfileGrid() {
  return (
    <div className="w-[350px] mx-auto mt-10 bg-white rounded-[30px] shadow-lg p-6 relative border">
      {/* Calendar tabs */}
      <div className="absolute top-[-20px] left-6 w-5 h-10 bg-white rounded-full shadow-md" />
      <div className="absolute top-[-20px] right-6 w-5 h-10 bg-white rounded-full shadow-md" />

      {/* Grid with dashed lines */}
      <div
        className="grid grid-cols-4 grid-rows-2 gap-0 relative"
        style={{
          borderCollapse: 'collapse',
          borderSpacing: 0
        }}
      >
        {people.flat().map((person, index) => {
          const row = Math.floor(index / 4);
          const col = index % 4;

          return (
            <div
              key={index}
              className={`flex items-center justify-center h-24 relative
                ${row < 1 ? 'border-b-1 border-dashed border-[#56C1FA]' : ''}
                ${col < 3 ? 'border-r-1 border-dashed border-[#56C1FA]' : ''}
              `}
            >
              {person && (
                <div className="relative group">
                  <Image
                    src={person.src}
                    width={50}
                    height={50}
                    alt="profile"
                    className="rounded-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg"
                  />
                  {person.indicator && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-[#56C1FA] rounded-full border-2 border-white" />
                  )}
                  {person.label && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full shadow">
                      {person.label}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
