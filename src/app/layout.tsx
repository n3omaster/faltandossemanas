import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://faltandossemanas.com"),
	title:
		"Faltan Dos Semanas para la Libertad de Cuba | Countdown Trump Cuba 2026",
	description:
		"Cuenta regresiva en vivo: faltan solo 2 semanas para la liberacion de Cuba. Trump anuncia la libertad de Cuba. Sigue el countdown al 19 de marzo de 2026. #FaltanDosSemanas #LibertadCuba",
	keywords: [
		"libertad de cuba",
		"trump cuba",
		"liberacion de cuba",
		"cuba libre trump",
		"trump libera cuba",
		"faltan dos semanas cuba",
		"countdown cuba",
		"cuenta regresiva cuba",
		"cuba libre 2026",
		"trump cuba 2026",
		"libertad cuba trump",
		"cuba libre countdown",
		"faltan dos semanas",
		"faltandossemanas",
	],
	alternates: {
		canonical: "https://faltandossemanas.com",
	},
	openGraph: {
		title: "Faltan Dos Semanas para la Libertad de Cuba",
		description:
			"Cuenta regresiva en vivo para la liberacion de Cuba. Trump anuncia: faltan solo 2 semanas. Sigue el countdown. #FaltanDosSemanas",
		url: "https://faltandossemanas.com",
		siteName: "Faltan Dos Semanas - Libertad de Cuba",
		type: "website",
		locale: "es_LA",
	},
	twitter: {
		card: "summary_large_image",
		title: "Faltan Dos Semanas para la Libertad de Cuba",
		description:
			"Cuenta regresiva en vivo para la liberacion de Cuba. Trump anuncia: faltan solo 2 semanas. #FaltanDosSemanas #LibertadCuba",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	other: {
		"google-site-verification": "VERIFICACION_AQUI",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/icon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</head>
			<body className="font-[--font-space-mono]">{children}</body>
		</html>
	);
}
