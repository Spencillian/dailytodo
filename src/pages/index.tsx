import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import EditList from "../components/editlist";
import Navbar from "../components/navbar";
import Checklist from "../components/checklist";
import type { viewMode } from "../components/navbar";
import type { Pair } from "../components/editlist";

const Home: NextPage = () => {
  // Manage state of app with edit mode and checklist mode
  const [mode, setMode] = useState<viewMode>("edit");

  // Get list from local storage
  const [list, setList] = useState<Pair[]>(() => {
    const list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(list);
    }
    return [];
  });

  // Save list to local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Head>
        <title>Daily To Do</title>
        <meta name="description" content="Basic to do list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <Navbar currentMode={mode} changeMode={setMode}/>
        {mode === "edit" ? <EditList list={list} setList={setList}/> : <Checklist list={list} setList={setList}/>}
      </div>
    </>
  );
};

export default Home;
