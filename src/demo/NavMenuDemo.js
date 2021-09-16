import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { NavMenu } from "../components/NavMenu";

export const NavMenuDemo = () => {
  const toast = useRef(null);
  const items = [
    {
      label: "Options",
      items: [
        {
          label: "Update",
        //   icon: "pi pi-refresh",
          command: () => {
            toast.current.show({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Delete",
        //   icon: "pi pi-times",
          command: () => {
            toast.current.show({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
      ],
    },
    {
      label: "Navigate",
      items: [
        {
          label: "React Website",
        //   icon: "pi pi-external-link",
        //   url: "https://reactjs.org/",
        },
        {
          label: "Router",
        //   icon: "pi pi-upload",
          command: (e) => {
            // window.location.hash = "/fileupload";
          },
        },
      ],
    },
  ];

  return (
    <div>
      <Toast ref={toast}></Toast>

      <div className="card">
        <NavMenu model={items} />
      </div>
    </div>
  );
};
