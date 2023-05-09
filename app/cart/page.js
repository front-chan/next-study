export default function Cart() {
    let carts = ["Tomatoes", "Pasta"];

    return (
        <div>
            <h4 className="title">장바구니</h4>
            <CartItem item={carts[0]} />
            <CartItem item={carts[1]} />
            <Banner content="롯데카드" />
            <Banner content="삼성카드" />
            <Btn color="blue" />
        </div>
    );
}

function Banner(props) {
    return <h5 style={{ textAlign: "center" }}>{props.content} 결제 행사중</h5>;
}

function Btn(props) {
    return <button style={{ background: props.color }}>버튼이다</button>;
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
