import buttons from "../data/buttons";
import Button from "./Button";

export const Calculator = () => {

    const hanleButtonClick = (label, type) => {
        console.log(label, type);
    };
  return (
    <div className="w-[400px] h-[640px] bg-white rounded-xl p-4 flex flex-col">
      <p className="text-md font-bold">Calculator</p>

      <div
        id="display"
        className="w-full h-[82px] bg-gray-700 mt-2 rounded text-white p-2"
      >
        {/* Add your display logic here */}
      </div>

      <div className="flex-1 mt-4">
        <div className="grid grid-cols-4 gap-2 h-full">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              type={btn.type}
              span={btn.span}
              onClick={hanleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
