import React, { createContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const activityData = createContext({});

type Props = {};

interface activity {
  id: any;
  startdate: string;
  enddate: string;
  description: string;
}

const ActivityPage = (props: Props) => {
  const params = useParams();
  const [activitydetails, setactivitydetails] = useState<activity>({
    id: params.id,
    startdate: new Date().toISOString(),
    enddate: new Date().toISOString(),
    description: "",
  });
  useEffect(() => {
    fetch(`/api/activitybyid?id=${params.id}`).then(
      async (r) => {
        const restult = await r.json();
        if (restult.response == "success")
          setactivitydetails(restult.result[0]);
      }
    );
  }, []);
  return (
    <>
      <activityData.Provider value={activitydetails}>
        <Outlet />
      </activityData.Provider>
    </>
  );
};
export default ActivityPage;
export {activityData}