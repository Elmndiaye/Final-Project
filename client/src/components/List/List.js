import React from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
