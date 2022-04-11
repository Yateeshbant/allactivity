import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

// important to include { "Content-type": "application/json" } in the post header or else you'll get empty body in the express request.

type Props = {};

const CreateActivity = (props: Props) => {
  const navi = useNavigate();
  const createNew = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const startdate = e.currentTarget.startdate.value;
    const enddate = e.currentTarget.enddate.value;
    const description = e.currentTarget.description.value;
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        startdate: startdate,
        enddate: enddate,
        description: description,
      }),
      headers: { "Content-type": "application/json" },
    }).then((r) => navi("/"));
  };

  return (
    <form className="acitvity-page" onSubmit={createNew}>
      <input
        type="datetime-local"
        name="startdate"
        defaultValue={new Date().toISOString().slice(0, 16)}
      />
      <br />
      <input
        type="datetime-local"
        name="enddate"
        defaultValue={new Date().toISOString().slice(0, 16)}
      />
      <br />
      <input className="edit-btn" type="submit"></input>
      <textarea name="description"></textarea>
    </form>
  );
};

export default CreateActivity;
