export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {products.map((p, i) => (
                <div className="food" key={i}>
                    <img src={`/food${i}.png`} alt={p} className="food-img" />
                    <h4>{p} $40</h4>
                </div>
            ))}
        </div>
    );
}
