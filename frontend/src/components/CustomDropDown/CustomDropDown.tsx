import { Dropdown } from "primereact/dropdown";
import { Control, Controller } from "react-hook-form";
import { classNames } from "primereact/utils";

export interface LabelValuePair {
    label: string;
    value: string;
}
interface CustomDropDownProps {
    control: Control<any>;
    label: string;
    fieldName: string;
    options: LabelValuePair[];
}
export default function CustomDropDown({
    control,
    label,
    options,
    fieldName,
}: CustomDropDownProps) {
    return (
        <div className="field text-xs">
            <span className="p-float-label">
                <Controller
                    name={label}
                    control={control}
                    render={({ field }) => (
                        <Dropdown
                            id={field.name}
                            value={field.value}
                            onChange={(e) => field.onChange(e.value)}
                            options={options}
                            optionLabel="label"
                            optionValue="value"
                            className={classNames({
                                "col-12": fieldName === "industrySector",
                            })}
                        />
                    )}
                />
                <label htmlFor={label}>{label}</label>
            </span>
        </div>
    );
}
