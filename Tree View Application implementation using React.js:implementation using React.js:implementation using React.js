import React, { useState } from 'react';

// Sample data for components, assets, and locations
const data = [
  {
    name: 'Component 1',
    assets: [
      {
        name: 'Asset 1',
        locations: ['Location 1', 'Location 2']
      },
      {
        name: 'Asset 2',
        locations: ['Location 3', 'Location 4']
      }
    ]
  },
  {
    name: 'Component 2',
    assets: [
      {
        name: 'Asset 3',
        locations: ['Location 5']
      }
    ]
  }
];

// Recursive component to render the tree view
const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleOpen}>
        {isOpen ? '-' : '+'} {node.name}
      </div>
      {isOpen && (
        <div style={{ marginLeft: 20 }}>
          {node.assets &&
            node.assets.map(asset => (
              <div key={asset.name}>
                <div>{asset.name}</div>
                <div style={{ marginLeft: 20 }}>
                  {asset.locations &&
                    asset.locations.map(location => (
                      <div key={location}>{location}</div>
                    ))}
                </div>
              </div>
            ))}
   </div>
      )}
    </div>
  );
};

// Main component to render the tree view
const TreeView = ({ data }) => {
  return (
    <div>
      {data.map((component, index) => (
        <TreeNode key={index} node={component} />
      ))}
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <h1>Company Assets</h1>
      <TreeView data={data} />
    </div>
  );
};

export default App;
