import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material";
import { ReactComponent as DownIcon } from "../../assets/icons/down.svg";

export default function Selected({ title, onChange, variant }) {
  const [category, setCategory] = React.useState("");
  React.useEffect(() => {
    onChange(category);
  }, [category]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormSelect>
      <InputLabel>Не выбрано</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={category}
        label="category"
        onChange={handleChange}
        IconComponent={DownIcon}
      >
        {title?.map((el) => (
          <CopyMenuItem key={el.id} value={variant ? el.id : el.name}>
            {el.name}
          </CopyMenuItem>
        ))}
      </Select>
    </FormSelect>
  );
}

const FormSelect = styled(FormControl)`
  width: 269px;
  height: 35px;
  border-radius: 5px;
`;
const CopyMenuItem = styled(MenuItem)`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
`;
