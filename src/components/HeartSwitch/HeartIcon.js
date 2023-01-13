import React, { useState } from "react";
import { HeartSwitch } from "@anatoliygatt/heart-switch";

const HeartIcon = () => {
  const [checked, setChecked] = useState(false);
  return (
    <HeartSwitch
      size="sm"
      inactiveTrackFillColor="#f1efef"
      inactiveTrackStrokeColor="#b1adad"
      activeTrackFillColor="#d42f06"
      activeTrackStrokeColor="#df6d6d"
      inactiveThumbColor="#ecfeff"
      activeThumbColor="#ecfeff"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    />
  );
};

export default HeartIcon;
