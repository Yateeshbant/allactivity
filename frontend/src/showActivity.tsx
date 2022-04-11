import { Link } from "react-router-dom";

//activityData is the context created by the activity component

import { activityData } from "./activityPage";
type Props = {};

// rendered at /activity/<id>

const ShowActivity = (props: Props) => {
  return (
    <>
      <activityData.Consumer>
        {(value: any) => {
          return (
            <div className="acitvity-page">
              <span>{value.startdate}</span>
              <br />
              <span>{value.enddate}</span>
              <br />
              <div>
                <Link className="edit-btn" style={{ width: 50 }} to="./edit">
                  Edit
                </Link>
              </div>
              <p>{value.description}</p>
            </div>
          );
        }}
      </activityData.Consumer>
    </>
  );
};

export default ShowActivity;
