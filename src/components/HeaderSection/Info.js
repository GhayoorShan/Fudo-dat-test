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

  console.log(data);
  //   console.log(icons);

  return (
    <div className="container py-5">
      <div className="row">
        {data?.map((d) => (
          <div class="col-md-4 ">
            <div class="card text-center">
              <div class="card-body">
                <img src={icons} class="card-img-top" alt="..." />
                <h5 class="card-title">{d.description}</h5>
                <p class="card-text">{d.title}</p>
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
