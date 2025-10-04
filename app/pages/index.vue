<template>
	<div class="min-h-screen bg-gray-50 py-20">
		<div class="max-w-6xl mx-auto px-6 py-8">
			<!-- Header Hero Section -->
			<section class="text-center mb-12 py-12">
				<div class="max-w-3xl mx-auto">
					<h1 class="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
						Vos <span class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">souvenirs</span> précieux
					</h1>
					<p class="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
						Conservez vos pensées et redécouvrez-les quand le cœur vous en dit. 
						Un espace personnel pour vos moments les plus précieux.
					</p>
				</div>
			</section>

			<!-- Navigation avec design moderne -->
			<nav class="flex justify-center mb-12">
				<div class="bg-white rounded-2xl p-2 shadow-sm border border-gray-200/50 backdrop-blur-sm">
					<div class="flex space-x-1">
						<button
							@click="currentView = 'write'"
							:class="[
								'relative px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm',
								currentView === 'write'
									? 'bg-gray-900 text-white shadow-sm'
									: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
							]">
							<span class="relative z-10">✏️ Écrire</span>
						</button>
						<button
							@click="currentView = 'random'"
							:class="[
								'relative px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm',
								currentView === 'random'
									? 'bg-gray-900 text-white shadow-sm'
									: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
							]">
							<span class="relative z-10">🎲 Aléatoire</span>
						</button>
						<button
							@click="currentView = 'all'"
							:class="[
								'relative px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm',
								currentView === 'all'
									? 'bg-gray-900 text-white shadow-sm'
									: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
							]">
							<span class="relative z-10">📚 Collection</span>
						</button>
					</div>
				</div>
			</nav>

			<!-- Write View - Design épuré -->
			<div v-if="currentView === 'write'" class="max-w-2xl mx-auto">
				<div class="bg-white rounded-3xl border border-gray-200/50 shadow-sm overflow-hidden">
					<!-- Header de la carte -->
					<div class="px-8 py-6 border-b border-gray-100">
						<h2 class="text-2xl font-semibold text-gray-900 flex items-center">
							<span class="text-2xl mr-3">✨</span>
							Nouveau souvenir
						</h2>
						<p class="text-gray-500 mt-1 text-sm">Capturez ce moment précieux</p>
					</div>

					<!-- Formulaire -->
					<form @submit.prevent="submitLetter" class="p-8 space-y-8">
						<div class="space-y-2">
							<label for="title" class="block text-sm font-medium text-gray-700">
								Titre <span class="text-gray-400 font-normal">(optionnel)</span>
							</label>
							<input
								v-model="newLetter.title"
								type="text"
								id="title"
								placeholder="Un titre pour ce souvenir..."
								class="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 bg-gray-50/50 hover:bg-white focus:bg-white" />
						</div>

						<div class="space-y-2">
							<label for="content" class="block text-sm font-medium text-gray-700">
								Votre souvenir
							</label>
							<textarea
								v-model="newLetter.content"
								id="content"
								rows="8"
								placeholder="Que voulez-vous vous rappeler ? Écrivez librement vos pensées, émotions, ou moments précieux..."
								class="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none placeholder-gray-400 bg-gray-50/50 hover:bg-white focus:bg-white"
								required></textarea>
						</div>

						<button
							type="submit"
							:disabled="!newLetter.content.trim() || isSubmitting"
							class="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-2xl font-medium hover:from-gray-800 hover:to-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md disabled:hover:shadow-sm">
							<span v-if="isSubmitting" class="flex items-center justify-center">
								<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								Sauvegarde...
							</span>
							<span v-else class="flex items-center justify-center">
								<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
								</svg>
								Sauvegarder ce souvenir
							</span>
						</button>
					</form>
				</div>
			</div>

			<!-- Random Letter View - Plus moderne -->
			<div v-if="currentView === 'random'" class="max-w-2xl mx-auto">
				<!-- Bouton de découverte -->
				<div class="text-center mb-8">
					<button
						@click="fetchRandomLetter"
						:disabled="isLoading"
						class="group bg-white border border-gray-200/50 text-gray-700 py-4 px-8 rounded-2xl font-medium hover:border-blue-300 hover:bg-blue-50/50 disabled:opacity-50 transition-all duration-300 shadow-sm hover:shadow-md disabled:hover:shadow-sm">
						<span v-if="isLoading" class="flex items-center">
							<svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Recherche en cours...
						</span>
						<span v-else class="flex items-center">
							<span class="text-xl mr-2 group-hover:animate-bounce">🎲</span>
							Découvrir un souvenir
						</span>
					</button>
				</div>

				<!-- Carte du souvenir aléatoire -->
				<div
					v-if="randomLetter"
					class="bg-white rounded-3xl border border-gray-200/50 shadow-sm overflow-hidden">
					<!-- Header avec date -->
					<div class="px-8 py-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
						<div class="flex items-center justify-between">
							<div class="flex items-center space-x-3">
								<div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
									<span class="text-white text-sm">📝</span>
								</div>
								<div>
									<p class="text-sm font-medium text-gray-700">Souvenir retrouvé</p>
									<p class="text-xs text-gray-500">{{ formatDate(randomLetter.createdAt) }}</p>
								</div>
							</div>
							<span class="text-2xl">✨</span>
						</div>
					</div>
					
					<!-- Contenu -->
					<div class="p-8">
						<h3
							v-if="randomLetter.title"
							class="text-xl font-semibold text-gray-900 mb-6">
							{{ randomLetter.title }}
						</h3>
						<div class="prose prose-gray max-w-none">
							<p class="text-gray-700 leading-relaxed whitespace-pre-wrap text-base">
								{{ randomLetter.content }}
							</p>
						</div>
					</div>
				</div>

				<!-- État vide -->
				<div
					v-if="!randomLetter && !isLoading"
					class="text-center py-16">
					<div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
						<span class="text-2xl">🎭</span>
					</div>
					<h3 class="text-lg font-medium text-gray-900 mb-2">Aucun souvenir pour le moment</h3>
					<p class="text-gray-500">Cliquez sur le bouton pour découvrir un souvenir aléatoire</p>
				</div>
			</div>

			<!-- All Letters View - Design moderne en grille -->
			<div v-if="currentView === 'all'" class="max-w-7xl mx-auto">
				<!-- Header de la section -->
				<div class="mb-12 text-center">
					<h2 class="text-3xl font-semibold text-gray-900 mb-3">Votre collection</h2>
					<p class="text-gray-600">
						<span class="font-medium">{{ letters.length }}</span> 
						souvenir{{ letters.length !== 1 ? "s" : "" }} 
						{{ letters.length > 0 ? "conservé" + (letters.length !== 1 ? "s" : "") : "" }}
					</p>
				</div>

				<!-- État vide avec design moderne -->
				<div
					v-if="letters.length === 0"
					class="text-center py-24">
					<div class="max-w-md mx-auto">
						<div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
							<span class="text-3xl">📝</span>
						</div>
						<h3 class="text-xl font-semibold text-gray-900 mb-3">Votre première page</h3>
						<p class="text-gray-500 mb-6 leading-relaxed">
							Votre collection de souvenirs est vide pour le moment. 
							Commencez par écrire votre première pensée précieuse.
						</p>
						<button
							@click="currentView = 'write'"
							class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-2xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md">
							✏️ Écrire mon premier souvenir
						</button>
					</div>
				</div>

				<!-- Grille des souvenirs -->
				<div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div
						v-for="letter in letters"
						:key="letter.id"
						class="group bg-white rounded-3xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1">
						
						<!-- Header de la carte -->
						<div class="flex items-start justify-between mb-4">
							<div class="text-sm text-gray-400">
								{{ formatDate(letter.createdAt) }}
							</div>
							<div class="opacity-0 group-hover:opacity-100 transition-opacity">
								<span class="text-gray-300">📖</span>
							</div>
						</div>
						
						<!-- Titre -->
						<h3
							v-if="letter.title"
							class="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
							{{ letter.title }}
						</h3>
						
						<!-- Contenu avec limite -->
						<div class="text-gray-600 leading-relaxed">
							<p class="line-clamp-4">
								{{ letter.content }}
							</p>
						</div>
						
						<!-- Indicateur de lecture -->
						<div class="mt-4 pt-4 border-t border-gray-100">
							<span class="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">
								Cliquer pour lire →
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Notifications modernes -->
		<Teleport to="body">
			<div class="fixed top-6 right-6 z-50 space-y-3">
				<Transition
					v-for="notification in notifications"
					:key="notification.id"
					enter-active-class="transform transition duration-300 ease-out"
					enter-from-class="translate-x-full opacity-0"
					enter-to-class="translate-x-0 opacity-100"
					leave-active-class="transform transition duration-200 ease-in"
					leave-from-class="translate-x-0 opacity-100"
					leave-to-class="translate-x-full opacity-0">
					<div
						class="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-4 shadow-lg max-w-sm">
						<div class="flex items-start space-x-3">
							<div
								:class="[
									'w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5',
									{
										'bg-green-500': notification.type === 'success',
										'bg-red-500': notification.type === 'error',
										'bg-blue-500': notification.type === 'info',
										'bg-yellow-500': notification.type === 'warning',
									},
								]">
								<span v-if="notification.type === 'success'">✓</span>
								<span v-else-if="notification.type === 'error'">✕</span>
								<span v-else-if="notification.type === 'info'">i</span>
								<span v-else-if="notification.type === 'warning'">!</span>
							</div>
							<div class="flex-1 min-w-0">
								<p class="text-sm text-gray-900 font-medium">
									{{ notification.message }}
								</p>
							</div>
							<button
								@click="removeNotification(notification.id)"
								class="text-gray-400 hover:text-gray-600 transition-colors">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
								</svg>
							</button>
						</div>
					</div>
				</Transition>
			</div>
		</Teleport>
	</div>
</template>

<script setup>
useHead({
	title: "Boîte à Souvenirs - Vos pensées précieuses",
	meta: [
		{
			name: "description",
			content: "Conservez et redécouvrez vos souvenirs les plus précieux dans un espace personnel et moderne.",
		},
	],
});

// État réactif
const currentView = ref("write");
const letters = ref([]);
const randomLetter = ref(null);
const isLoading = ref(false);
const isSubmitting = ref(false);

const newLetter = ref({
	title: "",
	content: "",
});

// Fonctions
const submitLetter = async () => {
	if (!newLetter.value.content.trim()) return;

	isSubmitting.value = true;

	try {
		await $fetch("/api/letters", {
			method: "POST",
			body: {
				title: newLetter.value.title.trim() || null,
				content: newLetter.value.content.trim(),
			},
		});

		// Réinitialiser le formulaire
		newLetter.value = { title: "", content: "" };

		// Afficher la vue de toutes les lettres et recharger
		currentView.value = "all";
		await fetchAllLetters();

		// Afficher une notification de succès
		showNotification("✨ Souvenir sauvegardé avec succès", "success");
	} catch (error) {
		console.error("Erreur lors de l'envoi:", error);
		showNotification("❌ Erreur lors de la sauvegarde", "error");
	} finally {
		isSubmitting.value = false;
	}
};

const fetchRandomLetter = async () => {
	isLoading.value = true;

	try {
		randomLetter.value = await $fetch("/api/letters/random");
		showNotification("🎲 Souvenir découvert !", "success");
	} catch (error) {
		console.error("Erreur lors de la récupération:", error);
		randomLetter.value = null;
		if (error.statusCode === 404) {
			showNotification("📝 Aucun souvenir trouvé - écrivez votre premier !", "info");
		} else {
			showNotification("❌ Erreur lors de la récupération", "error");
		}
	} finally {
		isLoading.value = false;
	}
};

const fetchAllLetters = async () => {
	try {
		letters.value = await $fetch("/api/letters");
	} catch (error) {
		console.error("Erreur lors de la récupération:", error);
		showNotification("❌ Erreur de chargement", "error");
	}
};

const formatDate = (dateString) => {
	const date = new Date(dateString);
	const now = new Date();
	const diffTime = Math.abs(now - date);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays === 1) {
		return "Hier";
	} else if (diffDays < 7) {
		return `Il y a ${diffDays} jours`;
	} else {
		return date.toLocaleDateString("fr-FR", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}
};

// Gestion des notifications
const notifications = ref([]);

const showNotification = (message, type = "info") => {
	const id = Date.now();
	notifications.value.push({ id, message, type });

	// Supprimer automatiquement après 5 secondes
	setTimeout(() => {
		removeNotification(id);
	}, 5000);
};

const removeNotification = (id) => {
	notifications.value = notifications.value.filter((n) => n.id !== id);
};

// Charger les lettres au montage du composant
onMounted(() => {
	fetchAllLetters();
});

// Watcher pour charger les données en fonction de la vue
watch(currentView, (newView) => {
	if (newView === "all") {
		fetchAllLetters();
	} else if (newView === "random") {
		randomLetter.value = null;
	}
});
</script>

<style scoped>
/* Utilitaire pour limiter le nombre de lignes */
.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.line-clamp-4 {
	display: -webkit-box;
	-webkit-line-clamp: 4;
	line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

/* Style pour le contenu riche */
.prose {
	color: #374151;
	line-height: 1.75;
}

.prose p {
	margin-bottom: 1.25em;
}

/* Animations personnalisées */
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fadeInUp {
	animation: fadeInUp 0.3s ease-out;
}
</style>
