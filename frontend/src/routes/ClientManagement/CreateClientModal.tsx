import { CreateClientModalProps } from "./CreateClientModalTypes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Fieldset } from "primereact/fieldset";
import { Dialog } from "primereact/dialog";
import { RadioButton } from "primereact/radiobutton";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomDropDown, {
    LabelValuePair,
} from "../../components/CustomDropDown/CustomDropDown";

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

function FieldSetLabel(label: string) {
    return <div className="bg-white m-3">{label}</div>;
}

export default function CreateClientModal({
    visible,
    setVisible,
    setClientType,
    clientType,
}: CreateClientModalProps) {
    //Todo: integrate with backend logic
    // const [showMessage, setShowMessage] = useState(false);
    // const [formData, setFormData] = useState({});
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
                        style={{
                            display: "grid",
                            gridTemplateColumns: "3fr 1fr 2fr",
                        }}
                    >
                        <div>
                            <CustomInput
                                control={control}
                                errors={errors}
                                label="Company Name"
                                fieldName="companyName"
                            />
                        </div>
                        <div></div>
                        <div>
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
                <Fieldset
                    legend={FieldSetLabel("Contact Details")}
                    unstyled={true}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "3fr 1fr 2fr",
                        }}
                    >
                        <div>
                            <CustomInput
                                control={control}
                                errors={errors}
                                label="Contact Person"
                                fieldName="contactPerson"
                            />
                        </div>
                        <div></div>
                        <div>
                            <CustomInput
                                control={control}
                                errors={errors}
                                label="Contact Number"
                                fieldName="contactNumber"
                            />
                        </div>
                    </div>
                    <div>
                        <CustomInput
                            control={control}
                            errors={errors}
                            label="Email"
                            fieldName="email"
                        />
                    </div>
                </Fieldset>
            </form>
        </Dialog>
    );
}
