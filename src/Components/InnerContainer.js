import React from "react";
import styles from "./innercontainer.module.css";
const InnerContainer = ({ children }) => {
  return <div className={styles.innercontai}>{children}</div>;
};

export default InnerContainer;
