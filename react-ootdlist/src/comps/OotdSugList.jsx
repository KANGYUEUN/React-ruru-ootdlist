import { OotdSample } from "../data/OotdSample";
import "../css/icon.css";

// 제작자가 제안하는 List
const OotdSugList = () => {
  return (
    <div>
      <h2>OotdSugList &#42; </h2>
      <ul>
        {OotdSample.map((item) => (
          <li key={item.id}>
            <span>{item.today}</span>
            <span>{item.content}</span>
            <div className="top_icon">
              {item.link && (
                <a href={item.link}>
                  <img src="/images/top.png" alt="top" />
                  <img src="/images/bottom.png" alt="bottom" />
                  <img src="/images/setup.png" alt="setup" />
                  <img src="/images/shoes.png" alt="shoes" />
                </a>
              )}
            </div>
            {/* {item.complete ? <span>완료</span> : <span>미완료</span>} */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default OotdSugList;
