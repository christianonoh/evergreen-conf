import InputFieldContainer from "./InputFieldContainer";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });

interface ReactSelectInputProps {
  id: string;
  label: string;
  error: any;
  options: any;
  isMulti: boolean;
  onSelectChange: any;
  selectedValue: any;
  restField: any;
}
// Select Input using React Select library
const ReactSelectInput = ({
  id,
  label,
  error,
  options,
  isMulti,
  onSelectChange,
  selectedValue,
  restField,
}: ReactSelectInputProps) => {
  return (
    <InputFieldContainer label={label} id={id} required error={error}>
      <Select
        className="select-input"
        placeholder="Select..."
        options={options}
        isMulti={isMulti}
        closeMenuOnSelect={!isMulti}
        value={
          selectedValue
            ? options.find((x: any) => x.value === selectedValue)
            : selectedValue
        }
        onChange={(option: any) => {
          if (isMulti) {
            onSelectChange(
              option.length > 0 &&
                option.map((option: any) => option.value ?? option)
            );
          } else {
            onSelectChange(option ? option.value : option);
            // console.log(option);
          }
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#e8f3e8",
            primary: "#27272a",
          },
        })}
        {...restField}
      />
    </InputFieldContainer>
  );
};

export default ReactSelectInput;
