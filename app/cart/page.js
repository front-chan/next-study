export default function Cart() {
    let carts = ["Tomatoes", "Pasta"];

    return (
        <div>
            <h4 className="title">장바구니</h4>
            {carts.map((c, i) => (
                <CartItem item={c} />
            ))}
        </div>
    );
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
