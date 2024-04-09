import React from "react";
import Drawer from "../Drawer";

const Shop = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title="Secure a Shop">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, iusto.
        Quas molestias repellat, dolores porro alias perspiciatis consequuntur.
        Natus reprehenderit, id tempora eum mollitia quaerat doloribus quam
        dolorum voluptate possimus.
      </Drawer>
    </>
  );
};

export default Shop;