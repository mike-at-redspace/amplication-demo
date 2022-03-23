import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  postal?: string | null;
  province?: string | null;
};
