import Countdown from "@/components/Countdown";

export default function Home() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Event",
		name: "Libertad de Cuba - Faltan Dos Semanas",
		description:
			"Cuenta regresiva para la liberacion de Cuba. Trump anuncia que faltan solo 2 semanas para la libertad de Cuba. Countdown en vivo al 19 de marzo de 2026.",
		startDate: "2026-03-19T00:00:00-05:00",
		endDate: "2026-03-19T23:59:59-05:00",
		eventStatus: "https://schema.org/EventScheduled",
		eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
		location: {
			"@type": "VirtualLocation",
			url: "https://faltandossemanas.com",
		},
		organizer: {
			"@type": "Organization",
			name: "Faltan Dos Semanas",
			url: "https://faltandossemanas.com",
		},
		image: "https://faltandossemanas.com/og-image.png",
		url: "https://faltandossemanas.com",
		inLanguage: "es",
		keywords:
			"libertad de cuba, trump cuba, liberacion de cuba, cuba libre trump, faltan dos semanas",
	};

	const jsonLdWebPage = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Faltan Dos Semanas para la Libertad de Cuba",
		description:
			"Cuenta regresiva en vivo: faltan solo 2 semanas para la liberacion de Cuba segun declaraciones de Trump. Countdown al 19 de marzo de 2026.",
		url: "https://faltandossemanas.com",
		inLanguage: "es",
		isPartOf: {
			"@type": "WebSite",
			name: "Faltan Dos Semanas",
			url: "https://faltandossemanas.com",
		},
		about: {
			"@type": "Thing",
			name: "Libertad de Cuba",
			description: "La liberacion de Cuba anunciada por Trump para marzo 2026",
		},
		datePublished: "2026-03-05",
		dateModified: "2026-03-06",
	};

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
			<Countdown />
		</>
	);
}
