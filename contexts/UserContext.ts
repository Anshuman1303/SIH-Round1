import React, { createContext, useContext } from 'react';
import { User } from 'firebase/auth';

interface UserContextProps {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};
