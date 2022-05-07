import React, { useContext } from "react";
import { SearchContext } from "../context/search";

const HistoryNav = () => {
  const { historyList } = useContext(SearchContext);

  return (
    <div className="history">
      <h4>История просмотренных персонажей</h4>
      <ul>
        {historyList.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryNav;
