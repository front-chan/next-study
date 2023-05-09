let age = 20;
let name = "chan";

// export default age;
// 한 번만 export 할 수 있음

export { age, name };

export default function Hello() {
    return <h1>안녕하세요</h1>;
}
