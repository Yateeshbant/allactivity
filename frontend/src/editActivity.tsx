import React, { FormEvent, MouseEvent } from "react";
import { activityData } from "./activityPage";
import { useNavigate, useParams } from "react-router-dom";

type Props = {};

const EditActivity = (props: Props) => {
  const params = useParams();
  const navi = useNavigate();
  const update = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const startdate = e.currentTarget.startdate.value;
    const enddate = e.currentTarget.enddate.value;
    const description = e.currentTarget.description.value;
    fetch("/api/update", {
      method: "POST",
      body: JSON.stringify({
        id: Number(params.id),
        startdate: startdate,
        enddate: enddate,
        description: description,
      }),
      headers: { "Content-type": "application/json" },
    }).then((r) =>
      r.json().then((result) => {
        if (result.response == "success") {
          navi("../");
        }
      })
    );
  };
  const removeActivity = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch("/api/delete", {
      method: "POST",
      body: JSON.stringify({
        id: Number(params.id),
      }),
      headers: { "Content-type": "application/json" },
    }).then((r) =>
      r.json().then((result) => {
        if (result.response == "success") {
          navi("/");
        }
      })
    );
  };

  return (
    <>
      <activityData.Consumer>
        {(value: any) => {
          // defaultValue={value.startdate.slice(0, 16)} sliced because <input type="datetime-local"/> take string in the format yy-mm-dd:hh-mm
          return (
            <form className="acitvity-page" onSubmit={update}>
              <input
                type="datetime-local"
                name="startdate"
                defaultValue={value.startdate.slice(0, 16)}
              />
              <br />
              <input
                type="datetime-local"
                name="enddate"
                defaultValue={value.enddate.slice(0, 16)}
              />
              <br />
              <div>
                <input className="edit-btn" type="submit" value="update" />
                <button
                  className="edit-btn delete-btn"
                  onClick={removeActivity}>
                  Delete
                </button>
              </div>
              <br />
              <textarea name="description" defaultValue={value.description} />
              <br />
            </form>
          );
        }}
      </activityData.Consumer>
    </>
  );
};

export default EditActivity;
