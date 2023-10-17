  import React, { useState } from 'react';
  import './App.css';

  function App() {
    // Define state for your checkboxes and their corresponding labels
    const [leftItems, setLeftItems] = useState([
      { label: 'text 1', value: '' },
      { label: 'text 2', value: '' },
      { label: 'text 3', value: '' },
      { label: 'text 4', value: '' },
      { label: 'text 5', value: '' },
    ]);

    const [rightItems, setRightItems] = useState([
      { label: 'red 1', value: '' },
      { label: 'red 2', value: '' },
      { label: 'red 3', value: '' },
      { label: 'red 4', value: '' },
      { label: 'red 5', value: '' },
    ]);



    // Function to handle the transfer of items from left to right



    const handleLeftToRight = () => {
      const selectedItems = leftItems.filter((item) => item.value !== '');
      setLeftItems((prevLeftItems) =>
        prevLeftItems.map((item) =>
          selectedItems.some((selected) => selected.label === item.label)
            ? { ...item, value: '' }
            : item


        )
      );
      setRightItems((prevRightItems) => [
        ...prevRightItems,
        ...selectedItems,
      ]);
    };

    
    // Function to handle the transfer of items from right to left
    const handleRightToLeft = () => {
      const selectedItems = rightItems.filter((item) => item.value !== '');
      setRightItems((prevRightItems) =>
        prevRightItems.map((item) =>
          selectedItems.some((selected) => selected.label === item.label)
            ? { ...item, value: '' }
            : item
        )
      );
      setLeftItems((prevLeftItems) => [...prevLeftItems, ...selectedItems]);
    };



    return (
      <>
        <div className="flex">
          <div className="left">
            <ul>
              {leftItems.map((item, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={`leftItem`}
                    checked={item.value !== ''}
                    onChange={(event) => {
                      const updatedLeftItems = [...leftItems];
                      updatedLeftItems[index].value = event.target.checked
                        ? item.label
                        : '';
                      setLeftItems(updatedLeftItems);
                    }}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
            <button className="leftbutton" onClick={handleLeftToRight}>
              Transfer to right
            </button>
          </div>

          <div className="right">
            <ul>
              {rightItems.map((item, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={`rightItem`}
                    checked={item.value !== ''}
                    onChange={(event) => {
                      const updatedRightItems = [...rightItems];
                      updatedRightItems[index].value = event.target.checked
                        ? item.label
                        : '';
                      setRightItems(updatedRightItems);
                    }}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
            <button className="rightbutton" onClick={handleRightToLeft}>
              Transfer to left
            </button>
          </div>
        </div>
      </>
    );
  }

  export default App;
