export default function Layout({ children }) {
    return (
        <div>
            <p className="event-title">현대카드 무이자 이벤트중</p>
            {children}
        </div>
    );
}
