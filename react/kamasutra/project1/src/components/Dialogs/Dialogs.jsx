import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div>
      <div>
        <DialogItem name="Dimych" id="1" />
      </div>
      <div>
        <DialogItem name="Sveta" id="2" />
      </div>
      <div>
        <DialogItem name="Petr" id="3" />
      </div>
      <div>
        <DialogItem name="Nikolay" id="4" />
      </div>
    </div>
  );
};

export default Dialogs;
