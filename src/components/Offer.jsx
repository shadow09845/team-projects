import React, { useState } from 'react'
import "./Header.css";
import Coffee from "../assets/coffe.png";
import Coffee2 from "../assets/cofee.png";
const CoffeePage = () => {
  const [count1, setCount1] = useState(3);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(1);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-text">
          <h1>That is Our Best Offer</h1>
          <p>A coffee shop will help you to tell the audience what your business.</p>
        </div>
        <div className="nav-buttons">
          <button className="nav-btn">←</button>
          <button className="nav-btn active">→</button>
        </div>
      </div>

      {/* Grid */}
      <div className="card-grid">
        
        {/* Item 1 */}
        <div className="card">
          <img src={Coffee} alt="Brazilian" />
          <div className="price">$ 5.99</div>
          <div className="title">Brazilian coffe beans</div>
          <p className="description">Coffee that's always you handle your own the way you like.</p>
          <div className="controls">
            <div className="counter-box">
              <div className="count-display">{count1}</div>
              <div className="counter-btns">
                <button onClick={() => setCount1(count1 + 1)}>+</button>
                <button onClick={() => count1 > 0 && setCount1(count1 - 1)}>-</button>
              </div>
            </div>
            <button className="delivery-btn">Get Delivery</button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="card">
          <img src={Coffee2} alt="Vietnam" />
          <div className="price">$ 4.99</div>
          <div className="title">Vietnam coffe beans</div>
          <p className="description">Coffee that's always you handle your own the way you like.</p>
          <div className="controls">
            <div className="counter-box">
              <div className="count-display">{count2}</div>
              <div className="counter-btns">
                <button onClick={() => setCount2(count2 + 1)}>+</button>
                <button onClick={() => count2 > 0 && setCount2(count2 - 1)}>-</button>
              </div>
            </div>
            <button className="delivery-btn">Get Delivery</button>
          </div>
        </div>

        {/* Item 3 */}
        <div className="card">
          <img src={Coffee} alt="Indonesian" />
          <div className="price">$ 3.99</div>
          <div className="title">Indonesian coffe beans</div>
          <p className="description">Coffee that's always you handle your own the way you like.</p>
          <div className="controls">
            <div className="counter-box">
              <div className="count-display">{count3}</div>
              <div className="counter-btns">
                <button onClick={() => setCount3(count3 + 1)}>+</button>
                <button onClick={() => count3 > 0 && setCount3(count3 - 1)}>-</button>
              </div>
            </div>
            <button className="delivery-btn">Get Delivery</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoffeePage;