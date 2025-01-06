import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DropdownField({ item, handleInputChange }) {
  return (
    <div>
      <Select
        onValueChange={(value) => handleInputChange(item.name, value)}
        required={item.required}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {item?.options.map((item, index) => (
            <SelectItem value={item}>{item}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default DropdownField;
