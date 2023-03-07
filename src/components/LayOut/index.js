import React from "react";
import { Header, SideBar, MainContent, Footer,Table } from "@/components";

import styles from "@/styles/LayOut.module.css";
function index() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <MainContent />
      </main>
      {/* <Footer /> */}
      <Table/>
    </>
  );
}

export const LayOut = index;
