// "use client";
// client component가 됨
// 없으면 server component임

// server component에는 javascript 기능 넣기 불가능
// onClick 사용 불가
// useState, useEffect 사용 불가
// 로딩속도가 빠름
// 검색엔진 노출 유리

// client component는 javascript 기능 넣기 가능
// onClick 사용 가능
// useState, useEffect 등 사용 가능
// 로딩속도가 느림(javascript 많이 필요함, hydration 필요)
// hydration? html 유저에게 보낸 후에 javascript로 html 다시 읽고 분석하는 일
// 꼭 필요한 곳에서 use client를 갖다 써야 함

// 큰 페이지는 server component , JS기능 필요한 곳만 client component

// import age from "./data";
import Hello, { age, name } from "./data";

export default function Cart() {
    return (
        <div>
            <Hello />
            <h4 className="title">장바구니</h4>
            <div className="cart-item">
                <p>
                    {name} 상품명 {age}
                </p>
                <p>$40</p>
                <p>1개</p>
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    );
}

function CartItem() {
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
