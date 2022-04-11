import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface activity {
  id: number;
  startdate: string;
  enddate: string;
  description: string;
}

function App() {
  const [activityList, setactivityList] = useState<Array<activity>>([]);
  useEffect(() => {
    fetch("/api/allactivity").then(async (reponse) => {
      const restult = await reponse.json();
      if (restult.response == "success") {
        setactivityList([...restult.result]);
      }
    });
  }, []);
  return (
    <div className="app">
      <Link to="/create">Create new activity</Link>
      {activityList.map((a: activity) => {
        return (
          <div key={a.id} className="activity-card">
            <Link to={`/activity/${a.id}`}>
              <div>
                <span className="time-details">
                  Start: {new Date(Date.parse(a.startdate)).toDateString()}
                </span>
                <br />
                <span className="time-details">End:  {new Date(Date.parse(a.enddate)).toDateString()}</span>
              </div>
              <p>{a.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default App;
