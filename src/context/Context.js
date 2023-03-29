import { createContext, useState } from 'react';

export const appContext = createContext();

function Context({children}) {
	const [isDarkMode, setDarkMode] = useState(false);
	const toShare = { isDarkMode, setDarkMode };
	return <appContext.Provider value={toShare}>{children}</appContext.Provider>;
}

export default Context;