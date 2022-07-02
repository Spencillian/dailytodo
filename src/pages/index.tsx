import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import EditList from "../components/editlist";
import Navbar from "../components/navbar";
import type { viewMode } from "../components/navbar";
import type { Pair } from "../components/editlist";

const Home: NextPage = () => {
  // Manage state of app with bool for edit mode and checklist mode
  const [mode, setMode] = useState<viewMode>("edit");
  const [list, setList] = useState<Pair[]>([]);

  return (
    <>
      <Head>
        <title>Daily To Do</title>
        <meta name="description" content="Basic to do list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <Navbar currentMode={mode} changeMode={setMode}/>
        {mode === "edit" ? <EditList list={list} setList={setList}/> : null}
      </div>
    </>
  );
};

export default Home;
