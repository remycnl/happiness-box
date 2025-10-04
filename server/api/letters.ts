import prisma from "../../lib/prisma";

export default defineEventHandler(async (event) => {
	const method = event.method;

	try {
		if (method === "POST") {
			// Créer une nouvelle lettre
			const body = await readBody(event);
			const { content, title } = body;

			if (!content) {
				throw createError({
					statusCode: 400,
					statusMessage: "Le contenu de la lettre est requis",
				});
			}

			const letter = await prisma.letter.create({
				data: {
					content,
					title: title || null,
				},
			});

			return letter;
		}

		if (method === "GET") {
			// Récupérer toutes les lettres triées par date
			const letters = await prisma.letter.findMany({
				orderBy: {
					createdAt: "desc",
				},
			});

			return letters;
		}

		throw createError({
			statusCode: 405,
			statusMessage: "Méthode non autorisée",
		});
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: "Erreur serveur",
		});
	}
});
