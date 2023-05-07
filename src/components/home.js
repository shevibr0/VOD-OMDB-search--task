import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VodList from "./vodList";
import "./home.css";
import VodStrip from "./vodStrip";

function Home() {
  const [querys]=useSearchParams()
  const [ar, setAR] = useState([]);

  useEffect(() => {
    let search=querys.get("s")||"batman"
    DoApi(search);
  }, [querys]);
  const DoApi = async (search) => {
    let myUrl = `https://www.omdbapi.com/?s=${search}&apikey=d1b3481a`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    console.log(data);
    setAR(data.Search);
  };
  return (
    <React.Fragment>
      <VodStrip />
      <VodList ar={ar} />
    </React.Fragment>
  );
}

export default Home;
