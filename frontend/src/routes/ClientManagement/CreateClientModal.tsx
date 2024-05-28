import { CreateClientModalProps } from "../../types/CreateClientModalTypes";
import React, { useEffect, useState } from "react";
import { useForm, Controller, Control, FieldErrors } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
// import { CountryService } from "../service/CountryService";
import { RadioButton } from "primereact/radiobutton";

interface ClientTypeProps {
    clientType: string;
    setClientType: Function;
}

function SelectClientType({ clientType, setClientType }: ClientTypeProps) {
    return (
        <div className="flex justify-content mb-3">
            <div className="flex align-items-center">
                <RadioButton
                    inputId="direct_client_type"
                    name="direct"
                    value="Direct"
                    onChange={(e) => setClientType(e.value)}
                    checked={clientType === "Direct"}
                />
                <label htmlFor="direct" className="ml-2">
                    Direct
                </label>
            </div>
            <div className="flex align-items-center">
                <RadioButton
                    inputId="agency_client_type"
                    name="agency"
                    value="Agency"
                    onChange={(e) => setClientType(e.value)}
                    checked={clientType === "Agency"}
                />
                <label htmlFor="agency" className="ml-2">
                    Agency
                </label>
            </div>
        </div>
    );
}

interface CustomInputProps {
    control: Control<any>;
    errors: FieldErrors<any>;
    label: string;
    fieldName: string;
}

function CustomInput({ control, errors, label, fieldName }: CustomInputProps) {
    return (
        <div className="field">
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
                                "col-8": fieldName === "companyName",
                                "col-4": fieldName === "uen",
                                "col-12": fieldName === "address",
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

interface LabelValuePair {
    label: string;
    value: string;
}

interface CustomDropDownProps {
    control: Control<any>;
    label: string;
    fieldName: string;
    options: LabelValuePair[];
}
function CustomDropDown({
    control,
    label,
    options,
    fieldName,
}: CustomDropDownProps) {
    return (
        <div className="field">
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

function FieldSetLabel(label: string) {
    return <div className="bg-white m-3">{label}</div>;
}

export default function CreateClientModal({
    visible,
    setVisible,
    setClientType,
    clientType,
}: CreateClientModalProps) {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [industrySectorOptions, setIndustrySectorOptions] = useState<
        LabelValuePair[]
    >([]);

    useEffect(() => {
        // Replace this with API call next time to fetch the list of options
        const sampleIndustrySectorOptions = [
            { label: "Banking", value: "03" },
            { label: "Beauty", value: "04" },
            { label: "Fashion", value: "05" },
            { label: "Banking", value: "03" },
            { label: "Beauty", value: "04" },
            { label: "Fashion", value: "05" },
            { label: "Banking", value: "03" },
            { label: "Beauty", value: "04" },
            { label: "Fashion", value: "05" },
        ];

        setIndustrySectorOptions(sampleIndustrySectorOptions);
    }, []);

    const defaultValues = {
        companyName: "",
        uen: "",
        address: "",
        industrySector: "",
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ defaultValues });

    const onSubmit = (data: any) => {
        setFormData(data);
        setShowMessage(true);

        reset();
    };

    return (
        <Dialog
            header="Create New Client"
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => {
                if (!visible) return;
                setVisible(false);
            }}
        >
            <SelectClientType
                clientType={clientType}
                setClientType={setClientType}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset
                    legend={FieldSetLabel("Company Name")}
                    unstyled={true}
                >
                    <div className="flex">
                        <CustomInput
                            control={control}
                            errors={errors}
                            label="Company Name"
                            fieldName="companyName"
                        />
                        <CustomInput
                            control={control}
                            errors={errors}
                            label="UEN"
                            fieldName="uen"
                        />
                    </div>
                    <div>
                        <CustomInput
                            control={control}
                            errors={errors}
                            label="Address"
                            fieldName="address"
                        />
                    </div>
                    <div>
                        <CustomDropDown
                            control={control}
                            options={industrySectorOptions}
                            label="Industry Sector"
                            fieldName="industrySector"
                        />
                    </div>
                </Fieldset>
            </form>
        </Dialog>
    );
}
