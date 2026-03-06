"use client";

import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-19T00:00:00").getTime();

const BG_GIF_MOBILE = "/bg/mobile.gif";
const BG_GIF_DESKTOP = "/bg/desktop.gif";

function getTimeLeft() {
	const now = Date.now();
	const diff = TARGET_DATE - now;

	if (diff <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}

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

const SHARE_URL = "https://faltandossemanas.com";

const SHARE_TEXT_X =
	"🇨🇺🔥 ¡Faltan solo 2 semanas para la LIBERTAD DE CUBA! La cuenta regresiva ya empezo. ¡Se acabo la espera! #FaltanDosSemanas #CubaLibre #LibertadCuba";

const SHARE_TEXT_TELEGRAM =
	"🇨🇺🔥 ¡Faltan solo 2 semanas para la LIBERTAD DE CUBA! La cuenta regresiva ya empezo. ¡Sigue el countdown en vivo! 👉 faltandossemanas.com #FaltanDosSemanas #CubaLibre";

export default function Countdown() {
	const [timeLeft, setTimeLeft] = useState(getTimeLeft);
	const [bgGif, setBgGif] = useState(BG_GIF_DESKTOP);

	useEffect(() => {
		const updateGif = () => {
			setBgGif(window.innerWidth < 768 ? BG_GIF_MOBILE : BG_GIF_DESKTOP);
		};
		updateGif();
		window.addEventListener("resize", updateGif);
		return () => window.removeEventListener("resize", updateGif);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const shareLinks = {
		x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT_X)}&url=${encodeURIComponent(SHARE_URL)}`,
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`,
		telegram: `https://t.me/share/url?url=${encodeURIComponent(SHARE_URL)}&text=${encodeURIComponent(SHARE_TEXT_TELEGRAM)}`,
	};

	const isFinished =
		timeLeft.days === 0 &&
		timeLeft.hours === 0 &&
		timeLeft.minutes === 0 &&
		timeLeft.seconds === 0;

	return (
		<main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-['Space_Mono',monospace]">
			{/* Background GIF */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url('${bgGif}')` }}
				role="img"
				aria-label="Trump bailando celebrando la libertad de Cuba"
			/>

			{/* Blue overlay */}
			<div className="absolute inset-0 bg-blue-900/70" />

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-4">
				<h1 className="text-white text-xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4 sm:mb-6 text-center">
					Countdown para la Libertad de Cuba
				</h1>
				<p className="text-blue-200 text-sm sm:text-base md:text-lg text-center max-w-2xl mb-8 sm:mb-12 leading-relaxed">
					Trump declara: faltan solo 2 semanas para la liberacion de Cuba.
					Cuenta regresiva en vivo al <time dateTime="2026-03-19">19 de marzo de 2026</time>.
				</p>

				{isFinished ? (
					<div className="text-white text-4xl sm:text-6xl md:text-8xl font-bold tracking-wider">
						<span role="status" aria-live="polite">CUBA LIBRE</span>
					</div>
				) : (
					<div
						className="flex justify-center gap-3 sm:gap-6 md:gap-8"
						role="timer"
						aria-live="polite"
						aria-label={`Faltan ${timeLeft.days} dias, ${timeLeft.hours} horas, ${timeLeft.minutes} minutos y ${timeLeft.seconds} segundos para la libertad de Cuba`}
					>
						<TimeBlock value={timeLeft.days} label="Dias" />
						<Separator />
						<TimeBlock value={timeLeft.hours} label="Horas" />
						<Separator />
						<TimeBlock value={timeLeft.minutes} label="Minutos" />
						<Separator />
						<TimeBlock value={timeLeft.seconds} label="Segundos" />
					</div>
				)}
			</div>

			{/* Footer with SEO content */}
			<footer className="relative z-10 w-full pb-8 pt-4">
				<nav aria-label="Compartir en redes sociales" className="flex justify-center gap-4 sm:gap-6 mb-6">
					<ShareButton href={shareLinks.x} label="Compartir en X" displayLabel="X" />
					<ShareButton href={shareLinks.facebook} label="Compartir en Facebook" displayLabel="Facebook" />
					<ShareButton href={shareLinks.telegram} label="Compartir en Telegram" displayLabel="Telegram" />
				</nav>
				<p className="text-blue-300/60 text-xs text-center px-4 max-w-xl mx-auto">
					#FaltanDosSemanas #LibertadCuba #TrumpCuba #CubaLibre #LiberacionDeCuba
				</p>
			</footer>
		</main>
	);
}

function TimeBlock({ value, label }: { value: number; label: string }) {
	return (
		<div className="flex flex-col items-center">
			<span className="text-white text-4xl sm:text-7xl md:text-9xl font-bold tabular-nums tracking-tight">
				{pad(value)}
			</span>
			<span className="text-blue-200 text-[10px] sm:text-sm md:text-base uppercase tracking-[0.3em] mt-1 sm:mt-2">
				{label}
			</span>
		</div>
	);
}

function Separator() {
	return (
		<span className="text-white/50 text-4xl sm:text-7xl md:text-9xl font-bold self-start">
			:
		</span>
	);
}

function ShareButton({
	href,
	label,
	displayLabel,
}: {
	href: string;
	label: string;
	displayLabel: string;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
			className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
		>
			{displayLabel}
		</a>
	);
}
