import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IInvoice } from '@/utils/types';
interface InvoiceContextType {
	invoice: IInvoice;
	setInvoice: React.Dispatch<React.SetStateAction<IInvoice>>;
}

export const InvoiceContext = createContext<InvoiceContextType>({} as InvoiceContextType);

export const useInvoice = () => {
	const context = useContext(InvoiceContext);
	if (!context) {
		throw new Error('useInvoice must be used within an InvoiceProvider');
	}
	return context;
};
