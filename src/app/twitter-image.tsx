import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
	"Faltan Dos Semanas para la Libertad de Cuba - Countdown Trump Cuba 2026";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

const TARGET_DATE = new Date("2026-03-19T00:00:00").getTime();

function getTimeLeft() {
	const diff = TARGET_DATE - Date.now();
	if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	return {
		days: Math.floor(diff / (1000 * 60 * 60 * 24)),
		hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((diff / (1000 * 60)) % 60),
		seconds: Math.floor((diff / 1000) % 60),
	};
}

function pad(n: number): string {
	return n.toString().padStart(2, "0");
}

const BG_IMAGE =
	"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWY0YXBlbnR0aTB3Z3Y2ejNsYWRrendlZ3hmcXduY2pmMnJteWM0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S43RIQ4OtWGKMTyU8q/giphy.gif";

export default async function Image() {
	const t = getTimeLeft();
	const units = [
		{ value: pad(t.days), label: "DIAS" },
		{ value: pad(t.hours), label: "HORAS" },
		{ value: pad(t.minutes), label: "MINUTOS" },
		{ value: pad(t.seconds), label: "SEGUNDOS" },
	];

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					fontFamily: "monospace",
					overflow: "hidden",
				}}
			>
				{/* Background image */}
				<img
					src={BG_IMAGE}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>

				{/* Blue overlay */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						background: "rgba(15, 25, 60, 0.75)",
						display: "flex",
					}}
				/>

				{/* Content */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						zIndex: 1,
					}}
				>
					{/* Title */}
					<div
						style={{
							color: "white",
							fontSize: 40,
							fontWeight: 700,
							textTransform: "uppercase",
							letterSpacing: "0.2em",
							marginBottom: 14,
							textAlign: "center",
						}}
					>
						Countdown para la Libertad de Cuba
					</div>

					{/* Description */}
					<div
						style={{
							color: "rgba(255,255,255,0.65)",
							fontSize: 20,
							textAlign: "center",
							marginBottom: 44,
							maxWidth: 580,
							lineHeight: 1.5,
						}}
					>
						Trump declara: faltan solo 2 semanas para la liberacion de Cuba. Cuenta regresiva en vivo al 19 de marzo de 2026.
					</div>

					{/* Countdown */}
					<div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
						{units.map((unit, i) => (
							<div key={unit.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
								>
									<span
										style={{
											color: "white",
											fontSize: 110,
											fontWeight: 700,
											lineHeight: 1,
										}}
									>
										{unit.value}
									</span>
									<span
										style={{
											color: "rgba(255,255,255,0.6)",
											fontSize: 14,
											textTransform: "uppercase",
											letterSpacing: "0.3em",
											marginTop: 8,
										}}
									>
										{unit.label}
									</span>
								</div>
								{i < 3 && (
									<span
										style={{
											color: "rgba(255,255,255,0.4)",
											fontSize: 80,
											fontWeight: 700,
											marginBottom: 20,
										}}
									>
										:
									</span>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		),
		{ ...size },
	);
}
