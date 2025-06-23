import { useState } from "react";
import "./App.css";

const checkBoxesData = [
  {
    id: 1,
    name: "Mango",
    children: [
      {
        id: 2,
        name: "Apple",
        children: [
          {
            id: 4,
            name: "Banana",
            children: [
              {
                id: 7,
                name: "Kiwi",
                children: [
                  {
                    id: 11,
                    name: "Blueberry",
                    children: [],
                  },
                  {
                    id: 12,
                    name: "Blackberry",
                    children: [],
                  },
                ],
              },
              {
                id: 8,
                name: "Papaya",
                children: [],
              },
            ],
          },
          {
            id: 5,
            name: "Grapes",
            children: [
              {
                id: 9,
                name: "Pomegranate",
                children: [
                  {
                    id: 13,
                    name: "Starfruit",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Orange",
        children: [
          {
            id: 6,
            name: "Pineapple",
            children: [
              {
                id: 10,
                name: "Lychee",
                children: [
                  {
                    id: 14,
                    name: "Guava",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = {...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked; 
          child.children && updateChildren(child);
        })
      }
      updateChildren(node);

      const verifyChecked = (node) => {
        if (!node.children || node.children.length === 0) {
          return newState[node.id] || false;
        }
        const areAllChildrenChecked = node.children.map((data) =>
          verifyChecked(data)
        );
        const areAllChecked = areAllChildrenChecked.every(Boolean);
        newState[node.id] = areAllChecked;
        return areAllChecked;
      };

      checkBoxesData.forEach((node) => verifyChecked(node));

      return newState;
    })
  }

  return (
    <div>
      {data.map((node) => {
        return (
          <div className="parent" key={node.id}>
            <input type="checkbox" checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)} />
            <span>{node.name}</span>
            {node.children && (
              <Checkboxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <h1>Nested Checkboxes</h1>
      <Checkboxes
        data={checkBoxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}

export default App;
