import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Prashnant",
    age: "24",
    email: "prashant@gmail.com",
    interests: ["Coding", "Cooking"],
    theme: "Dark",
  });
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one interests";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmitClick = () => {
    //make api call
    console.log(data);
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            className="heading"
            key={index}
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab == tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
