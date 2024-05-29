import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Controller, Control, FieldErrors } from "react-hook-form";

interface CustomInputProps {
    control: Control<any>;
    errors: FieldErrors<any>;
    label: string;
    fieldName: string;
}

export default function CustomInput({
    control,
    errors,
    label,
    fieldName,
}: CustomInputProps) {
    return (
        <div
            className={classNames({
                field: true,
                "text-xs": true,
            })}
        >
            <span className="p-float-label">
                <Controller
                    name={fieldName}
                    control={control}
                    rules={{ required: `${label} is required.` }}
                    render={({ field, fieldState }) => (
                        <InputText
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                                "p-invalid": fieldState.invalid,
                            })}
                        />
                    )}
                />
                <label
                    htmlFor={fieldName}
                    className={classNames({
                        "p-error": errors.companyName,
                    })}
                >
                    {`${label}*`}
                </label>
            </span>
        </div>
    );
}
