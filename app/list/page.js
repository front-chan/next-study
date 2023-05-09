"use client";

import { useState } from "react";

export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];
    // let count = 0;
    let [count, setCount] = useState(0);

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {products.map((p, i) => (
                <div className="food" key={i}>
                    <img src={`/food${i}.png`} alt={p} className="food-img" />
                    <h4>{p} $40</h4>
                    <span> {count} </span>
                    <button
                        onClick={() => {
                            // console.log(1);
                            setCount(count + 1);
                        }}
                    >
                        +
                    </button>
                    <button
                        onClick={() => {
                            // console.log(1);
                            setCount(count - 1);
                        }}
                    >
                        -
                    </button>
                </div>
            ))}
        </div>
    );
}
