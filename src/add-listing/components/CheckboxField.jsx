import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

function CheckboxField({ item, handleChange }) {
  return (
    <div className="flex gap-2 items-center">
      <Checkbox onCheckedChange={(value) => handleChange(item.name, value)} />
      <h2>{item.label}</h2>
    </div>
  );
}

export default CheckboxField;
