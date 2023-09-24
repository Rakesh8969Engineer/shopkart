import React from "react";
import styled from "styled-components";
import navdata from "../impdata/TopMenu";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} >
      <li className="dd-li">
        <a href="#">{navdata[0].name.toUpperCase()}</a>
      </li>

      <li className="dd-li">
        <a href="#">{navdata[1].name.toUpperCase()}</a>
      </li>
      <li className="dropdown dd-li">
            <button className="dropbtn">{navdata[2].name.toUpperCase()}</button>
            <div className="dropdown-content font-['Poppins'] font-light">
              <a href="#">{navdata[2].child[0].name.toLocaleUpperCase()}</a>
              <a href="#">{navdata[2].child[1].name.toLocaleUpperCase()}</a>
              <a href="#">{navdata[2].child[2].name.toLocaleUpperCase()}</a>
              <a href="#">{navdata[2].child[3].name.toLocaleUpperCase()}</a>
            </div>
          </li>
          <li className="dd-li">
            <a href="#">{navdata[3].name.toUpperCase()}</a>
          </li>
      
    </Ul>
  );
};

export default RightNav;
