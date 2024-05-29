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
            <div className="flex align-items-center mr-3">
                <RadioButton
                    inputId="direct_client_type"
                    name="direct"
                    value="Direct"
                    onChange={(e) => setClientType(e.value)}
                    checked={clientType === "Direct"}
                    unstyled={true}
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
                    unstyled={true}
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
        <div
            className={classNames({
                field: true,
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
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <Fieldset
                    legend={FieldSetLabel("Company Name")}
                    unstyled={true}
                >
                    <div
                        // To change to a class: note primeflex doesnt support grids which is super annoying
                        className=""
                        style={{
                            display: "grid",
                            gridTemplateColumns: "3fr 1fr 1fr",
                        }}
                    >
                        <div className="">
                            <CustomInput
                                control={control}
                                errors={errors}
                                label="Company Name"
                                fieldName="companyName"
                            />
                        </div>
                        <div></div>
                        <div className="">
                            <CustomInput
                                control={control}
                                errors={errors}
                                label="UEN"
                                fieldName="uen"
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <CustomInput
                            control={control}
                            errors={errors}
                            label="Address"
                            fieldName="address"
                        />
                    </div>
                    <div className="mt-4">
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
