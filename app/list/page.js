"use client";

import { useState } from "react";

export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];
    let [count, setCount] = useState([0, 0, 0]);

    return (
        <div>
            <h4 className="title">상품목록</h4>

            {/* <span>{count[0]}</span>
            <button
                onClick={() => {
                    let newCount = [...count];
                    newCount[0]++;
                    setCount(newCount);
                }}
            >
                +
            </button>
            <span>{count[1]}</span>
            <button>+</button>
            <span>{count[2]}</span>
            <button>+</button> */}

            {products.map((p, i) => (
                <div className="food" key={i}>
                    <img src={`/food${i}.png`} alt={p} className="food-img" />
                    <h4>{p} $40</h4>
                    <span> {count[i]} </span>
                    <button
                        onClick={() => {
                            let newCount = [...count];
                            newCount[i]++;
                            setCount(newCount);
                        }}
                    >
                        +
                    </button>
                </div>
            ))}
        </div>
    );
}
