import React, { memo } from "react";

const Footer = memo((props) => {
  const {
    status,
    setStatusFilter,
    countItem,
    countItemLeft,
    clearCompleted
  } = props;

  const filterBTN = [
    {
      title: "All",
      isActive: status === "ALL",
      onClick: () => setStatusFilter("ALL"),
      link: ""
    },
    {
      title: "Active",
      isActive: status === "ACTIVE",
      onClick: () => setStatusFilter("ACTIVE"),
      link: "/active"
    },
    {
      title: "Completed",
      isActive: status === "COMPLETED",
      onClick: () => setStatusFilter("COMPLETED"),
      link: "/completed"
    }
  ];
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{countItemLeft}</strong>
        <span>{countItemLeft <= 1 ? " item" : " items"}</span>
        <span> left</span>
      </span>

      <ul className="filters">
        {filterBTN.map((item) => (
          <FilterBTN key={item.title} {...item} />
        ))}
      </ul>

      {countItem > countItemLeft && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
    </footer>
  );
});

const FilterBTN = memo((props) => {
  const { title, isActive, onClick, link } = props;
  return (
    <>
      <li>
        <a
          href={`/#${link}`}
          className={`${isActive ? "selected" : ""}`}
          onClick={onClick}
        >
          {title}
        </a>
      </li>
    </>
  );
});

export default Footer;
