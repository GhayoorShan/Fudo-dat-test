import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://54.169.31.224:3000/signup";

  const submitdata = async (name, email, password) => {
    let res = null;
    try {
      res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (e) {
      alert("ooops " + e);
    }
    let json = await res.json();

    let resStatus = res.status;

    if (res.status === 400) {
      alert(`Error is ${JSON.stringify(json.message[0].constraints)}`);
    } else if (resStatus === 200 || resStatus === 201) {
      alert(JSON.stringify(json.message));
    } else {
      alert("internal server error " + json);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if ((name && email && password) !== "") {
      submitdata(name, email, password);
      e.target.name.value = "";
      e.target.email.value = "";
      e.target.password.value = "";
    } else alert("Input can't be empty");
  };
  return (
    <div className="container my-5 bg-colored">
      <div className="row p-5">
        <div className="col-md-7">
          <p className="signup-heading pt-4">
            Receive payments quickly from anywhere
          </p>
          <p className="signup-subtitle">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
        </div>
        <div className="col px-5">
          <p className="signup-form-heading">Get Started for Free</p>
          <form onSubmit={handleOnSubmit}>
            <input
              className="form-control form-control-lg my-2"
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="form-control form-control-lg my-2"
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="form-control form-control-lg my-2"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="d-grid">
              <button className=" btn btn-lg  btn-yellow my-2">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
