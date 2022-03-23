import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address 1" source="address_1" />
        <TextInput label="Address 2" source="address_2" />
        <TextInput label="City" source="city" />
        <TextInput label="Postal Code" source="postal" />
        <TextInput label="Province" source="province" />
      </SimpleForm>
    </Create>
  );
};
