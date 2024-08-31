export interface IInvoice {
	invoiceNumber: number;
	invoiceDate: Date;
	invoiceTitle: string;
	billTo: {
		name: string;
		address: string;
		cityStateZip: string;
		phone: string;
	};
	from: {
		name: string;
		address: string;
		cityStateZip: string;
		phone: string;
	};
	items: {
		description: string;
		hours: number;
		rate: number;
		amount: number;
	}[] | {
		description: string;
		amount: number;
	}[];
	currency: string;
	total: number;
	invoiceType: 1 | 2 | 3 | 4;
}

export interface IInvoiceDocument extends IInvoice, Document {
	createdAt: Date;
	updatedAt: Date;
}