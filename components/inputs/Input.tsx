import { IInvoice } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";
import { TextInput } from "react-native-paper";
import { TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types";

export function Input({
  invoice,
  setInvoice,
  dataKey,
  label,
}: {
  invoice: IInvoice;
  setInvoice: Dispatch<SetStateAction<IInvoice>>;
  dataKey: string;
  label: TextInputLabelProp;
}) {
  return (
    <TextInput
      mode="flat"
      label={label}
      dense={true}
      onChangeText={(value) => setInvoice({ ...invoice, [dataKey]: value })}
      value={invoice[dataKey]}
    />
  );
}
