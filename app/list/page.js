// import Image from "next/image";
// import food0 from "/public/food0.png";
// 최적화된 이미지 넣으려면 이미지를 import해서 경로를 넣어야 함
// 외부 이미지는 width, height 속성이 필요함
// 외부 경로 이미지를 갖다 쓸 때는 next.config.js에 셋팅을 해야 함

export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {products.map((p, i) => (
                <div className="food" key={i}>
                    <img src={`/food${i}.png`} alt={p} className="food-img" />
                    {/* <Image src="/food0.png" alt={p} className="food-img" /> */}
                    {/* <Image src={food0} alt={p} className="food-img" /> */}
                    {/* <Image
                        src="https://images.unsplash.com/photo-1564874997803-e4d589d5fd41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG9tYXRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt={p}
                        className="food-img"
                        width={500}
                        height={400}
                    /> */}
                    <h4>{p} $40</h4>
                </div>
            ))}
        </div>
    );
}
