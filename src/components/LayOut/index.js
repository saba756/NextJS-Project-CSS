import React from "react";
import { Header, SideBar, MainContent, Footer, Accordion } from "@/components";

import styles from "@/styles/LayOut.module.css";
function index() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <MainContent />
      </main>
      <Accordion />
      <Footer />
    </>
  );
}

export const LayOut = index;
