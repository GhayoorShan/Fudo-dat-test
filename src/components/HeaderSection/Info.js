import React, { useEffect, useState } from "react";

const Info = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://54.169.31.224:3000/contact")
      .then((resp) => resp.json())
      .then((apiData) => {
        apiData.data.forEach((item) => {
          item.icon = item.icon.replace("localhost", "54.169.31.224");
        });

        setData(apiData.data);
        console.log(apiData.data.icon);
      });
  }, []);

  return (
    <div className="container py-5 info-section">
      <div className="row">
        {data?.map((d) => (
          <div className="col-md-4  " key={d.id}>
            <div className="card text-center">
              <div className="card-body ">
                <img src={d.icon} width="20%" alt="..." />
                <h5 className="card-title  pt-3 ">{d.description}</h5>
                <p className="card-text">{d.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
