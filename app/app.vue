<template>
	<div class="min-h-screen bg-white">
		<!-- Header fixe moderne -->
		<header class="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
			<div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
				<div class="flex items-center space-x-3">
					<!-- Logo/Icône -->
					<div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
						<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
						</svg>
					</div>
					<h1 class="text-xl font-semibold text-gray-900">Boîte à Souvenirs</h1>
				</div>
				
				<!-- Indicateur de status (optionnel) -->
				<div class="flex items-center space-x-2">
					<div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
					<span class="text-sm text-gray-500 hidden sm:inline">En ligne</span>
				</div>
			</div>
		</header>

		<!-- Contenu principal avec marge pour le header fixe -->
		<main>
			<NuxtPage />
		</main>

		<!-- Footer moderne et discret -->
		<footer class="border-t border-gray-100">
			<div class="max-w-6xl mx-auto px-6 py-12">
				<div class="text-center">
					<p class="text-gray-400 text-sm">
						Fait avec ❤️ pour préserver vos souvenirs précieux
					</p>
					<p class="text-gray-300 text-xs mt-2">
						© 2025 Boîte à Souvenirs
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
useHead({
	htmlAttrs: {
		lang: "fr",
	},
	meta: [
		{ charset: "utf-8" },
		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		{
			name: "description",
			content:
				"Boîte à souvenirs - Conservez et redécouvrez vos pensées précieuses",
		},
		{ name: "theme-color", content: "#3B82F6" },
		{ name: "color-scheme", content: "light" },
	],
	link: [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
	],
});
</script>

<style>
/* Assurer une police cohérente */
html {
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Scroll fluide pour les liens d'ancrage */
html {
	scroll-behavior: smooth;
}

/* Style pour la barre de défilement (webkit) */
::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
	background: #cbd5e1;
	border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
	background: #94a3b8;
}
</style>
