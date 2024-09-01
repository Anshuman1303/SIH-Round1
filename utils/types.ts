export interface IInvoice {
  invoiceNumber?: string;
  invoiceDate?: Date;
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
  tax?: string;
  invoiceType: 0 | 1 | 2 | 3;
}

export type Items =
  | {
    description?: string;
    hours?: number;
    rate?: number;
    amount?: string;
  }[]
  | {
    description?: string;
    amount?: string;
  }[];

export interface IInvoiceDocument extends IInvoice, Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface IInvoiceDocumentWithId extends IInvoiceDocument {
  id: string,
}