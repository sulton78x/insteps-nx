import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
// enableSystem - to detect system mode.
// attribute - so that class html attribute is used to store the system, so tailwind can apply appropriate class.

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
