import React from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { sidebarStepsData } from "../../Helpers/data";


const Sidebar = () => {
  return (
    <section
      className={styles.section}
    >
      {
        sidebarStepsData.map((data)=>{
          return(
            <SidebarItem key={data.index} index={data.index} stepInfo={data.info} />
          );
        })
      }
    </section>
  );
};

export default Sidebar;
