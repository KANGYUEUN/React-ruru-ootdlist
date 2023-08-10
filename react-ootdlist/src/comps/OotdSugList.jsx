import { OotdSample } from "../data/OotdSample";

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
            {item.link && (
              <a href={item.link}>
                <img src="/src/con/top.png" alt="top" />
              </a>
            )}
            {item.complete ? <span>완료</span> : <span>미완료</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default OotdSugList;
