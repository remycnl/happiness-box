import prisma from "../../../lib/prisma";

export default defineEventHandler(async (event) => {
	try {
		// Compter le nombre total de lettres
		const count = await prisma.letter.count();

		if (count === 0) {
			throw createError({
				statusCode: 404,
				statusMessage: "Aucune lettre trouvée",
			});
		}

		// Générer un index aléatoire
		const randomIndex = Math.floor(Math.random() * count);

		// Récupérer la lettre aléatoire
		const randomLetter = await prisma.letter.findMany({
			skip: randomIndex,
			take: 1,
		});

		return randomLetter[0];
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: "Erreur serveur",
		});
	}
});
