import React, { useEffect, useState } from "react";
import Calender from "../../assests/Calendar.png";
import Location from "../../assests/Location.png";
import Call from "../../assests/Call.png";

const icons = {
  Calender,
  Location,
  Call,
};

const Info = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://54.169.31.224:3000/contact")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData.data);
      });
  }, []);

  //   console.log(data);

  return (
    <div className="container py-5">
      <div className="row">
        {data?.map((d) => (
          <div className="col-md-4 ">
            <div className="card text-center">
              <div className="card-body">
                <img src={icons} className="card-img-top" alt="..." />
                <h5 className="card-title">{d.description}</h5>
                <p className="card-text">{d.title}</p>
                {d.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
