import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Button } from "./ui/button";
// Assuming ShadCN has these components

const KeyboardCustomizer: React.FC = () => {
  const [color, setColor] = useState("Black");
  const [switchType, setSwitchType] = useState("Blue");
  const [layout, setLayout] = useState("QWERTY");

  return (
    <div className="flex flex-col-reverse md:flex-row mx-5">
      <div className="p-6 bg-white shadow-md rounded-s-lg w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Customize Your Keyboard</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Color
          </label>
          <Dropdown
            options={["Black", "White", "Gray"]}
            selected={color}
            onChange={(option) => setColor(option)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Switch Type
          </label>
          <Dropdown
            options={["Blue", "Red", "Brown"]}
            selected={switchType}
            onChange={(option) => setSwitchType(option)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Layout
          </label>
          <Dropdown
            options={["QWERTY", "AZERTY", "DVORAK"]}
            selected={layout}
            onChange={(option) => setLayout(option)}
          />
        </div>

        <Button
          className="hover:bg-yellow-500 hover:text-black"
          onClick={() =>
            alert(`Customized Keyboard: ${color}, ${switchType}, ${layout}`)
          }
        >
          Confirm Customization
        </Button>
      </div>
      <div className="w-full md:w-1/2  shadow-md">
        <img
          className="rounded-e-lg h-full lg:h-full md:h-[362px]"
          src="https://i.ibb.co/wRLxdz3/Screenshot-2024-07-29-182541.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default KeyboardCustomizer;
