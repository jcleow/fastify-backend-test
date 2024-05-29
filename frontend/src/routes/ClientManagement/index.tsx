import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import CreateClientModal from "./CreateClientModal";
import { CreateClientModalProps } from "./CreateClientModalTypes";

// Client Types
const DIRECT = "Direct";

interface Client {
    companyName: string;
    contactPerson: string;
    contactNumber: string;
    email: string;
}

interface ColumnMeta {
    field: string;
    header: string;
}

function Header(props: CreateClientModalProps) {
    const { visible, setVisible, clientType, setClientType } = props;
    return (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">
                Client Management
            </span>
            <div>
                <Button
                    icon="pi pi-plus"
                    rounded
                    raised
                    onClick={() => setVisible(true)}
                />
                <CreateClientModal
                    visible={visible}
                    setVisible={setVisible}
                    clientType={clientType}
                    setClientType={setClientType}
                />
            </div>
        </div>
    );
}

export default function ClientManagement() {
    const [clients, _] = useState<Client[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [clientType, setClientType] = useState<string>(DIRECT);

    const headerModalProps = {
        visible,
        setVisible,
        clientType,
        setClientType,
    };

    const columns: ColumnMeta[] = [
        { field: "companyName", header: "Company Name" },
        { field: "contactPerson", header: "Contact Person" },
        { field: "contactNumber", header: "Contact Number" },
        { field: "email", header: "Email" },
    ];

    return (
        <div className="card">
            <DataTable
                value={clients}
                header={Header(headerModalProps)}
                tableStyle={{ minWidth: "50rem" }}
            >
                {columns.map((col, _) => (
                    <Column
                        key={col.field}
                        field={col.field}
                        header={col.header}
                    />
                ))}
            </DataTable>
        </div>
    );
}
