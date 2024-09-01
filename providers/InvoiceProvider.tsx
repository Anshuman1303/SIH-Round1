import { ReactNode, useState } from 'react';
import { InvoiceContext } from '@/contexts/InvoiceContext';
import { IInvoice } from '@/utils/types';
import { defaultInvoice } from '@/utils/firestoreUtils';
export const InvoiceProvider = ({ children }: { children: ReactNode }) => {
	const [invoice, setInvoice] = useState<IInvoice>(defaultInvoice);

	return (
		<InvoiceContext.Provider value={{ invoice, setInvoice }
		}>
			{children}
		</InvoiceContext.Provider>
	);
};