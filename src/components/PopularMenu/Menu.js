import React, { useEffect, useState } from "react";
import SliderOne from "./Slider";

const Menu = () => {
  const [category, setCategory] = useState(null);
  const [slug, setSlug] = useState("pizza");
  const [categoryItem, setCategoryItem] = useState("");

  useEffect(() => {
    fetch("http://54.169.31.224:3000/category")
      .then((resp) => resp.json())
      .then((apiData) => {
        apiData.data.forEach((d) => {
          d.icon = d.icon.replace("localhost", "54.169.31.224");
        });
        setCategory(apiData.data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://54.169.31.224:3000/category/${slug}`)
      .then((resp) => resp.json())
      .then((apiData) => {
        apiData.data.forEach((item) => {
          item.image = item.image.replace("localhost", "54.169.31.224");
        });

        // if (apiData.data.length < 4)
        //   apiData.data = { ...apiData.data, ...apiData.data };

        setCategoryItem(apiData.data);
        console.log(apiData.data);
      });
  }, [slug]);

  const handleClick = (e) => {
    setCategoryItem(null);
    setSlug(e.target.attributes.slug.value);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {category?.map((d) => (
            <li className="nav-item " role="presentation" key={d.slug}>
              <button
                className="nav-link menu-tab-font"
                id={d.slug}
                data-bs-toggle="tab"
                onClick={(e) => {
                  handleClick(e);
                }}
                slug={d.slug}
              >
                <img
                  className="mx-3"
                  width={25}
                  src={d.icon}
                  alt={d.name}
                  slug={d.slug}
                ></img>
                {d.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="row py-5">
        <SliderOne categoryItem={categoryItem} />
        {!categoryItem && (
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Menu;
