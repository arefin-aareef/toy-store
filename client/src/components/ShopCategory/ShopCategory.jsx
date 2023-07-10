// import { useEffect, useState } from "react";
// import ToyCard from "./ToyCard";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const ShopCategory = () => {
  const [activeTab, setActiveTab] = useState("die-cast");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://server-rho-virid.vercel.app/category/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="mb-4">
      <h1 className="text-3xl md:text-5xl my-6 text-center p-1">
        Find Your Toy By Category
      </h1>
      <div className="mx-12 my-6">
        <Tabs>
          <TabList>
            <Tab>
              <div
                onClick={() => handleTabClick("die-cast")}
                className={`shadow-xl p-3 text-black die-cast${
                  activeTab === "die-cast" ? " bg-ghost font-medium" : ""
                }`}
              >
                Die Cast
              </div>
            </Tab>

            <Tab>
              <div
                onClick={() => handleTabClick("remote-control")}
                className={`shadow-xl p-3 text-black remote-control${
                  activeTab === "remote-control"
                    ? " bg-ghost font-medium"
                    : ""
                }`}
              >
                Remote Control
              </div>
            </Tab>
            <Tab>
              <div
                onClick={() => handleTabClick("building")}
                className={`shadow-xl p-3 text-black building${
                  activeTab === "building" ? " bg-ghost font-medium" : ""
                }`}
              >
                Building
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-hidden">
              {
              toys.map(toy => <ToyCard
              key={toy._id}
              toy={toy}
              ></ToyCard>)
            }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-hidden">
            {
              toys.map(toy => <ToyCard
              key={toy._id}
              toy={toy}
              ></ToyCard>)
            }
          </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-hidden">
            {
              toys.map(toy => <ToyCard
              key={toy._id}
              toy={toy}
              ></ToyCard>)
            }
          </div>
          </TabPanel>


        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
