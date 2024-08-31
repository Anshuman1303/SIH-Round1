export interface IInvoice {
  invoiceNumber?: string;
  invoiceDate?: string;
  invoiceTitle?: string;
  billToName?: string;
  billToAddressLine1?: string;
  billToAddressLine2?: string;
  billToPhone?: string;
  fromName?: string;
  fromAddressLine1?: string;
  fromAddressLine2?: string;
  fromPhone?: string;
  items?: Items;
  currency?: string;
  total?: number;
}

export type Items =
  | {
      description?: string;
      hours?: number;
      rate?: number;
      amount?: number;
    }[]
  | {
      description?: string;
      amount?: number;
    }[];

export interface IInvoiceDocument extends IInvoice, Document {
  createdAt: Date;
  updatedAt: Date;
}
