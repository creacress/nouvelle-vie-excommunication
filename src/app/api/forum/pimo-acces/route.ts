import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// 🔹 Connexion à MongoDB
const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db("forum");
const accessCollection = db.collection("pimo_access");

// 🔹 Vérifier si un utilisateur est autorisé
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pseudo = searchParams.get("pseudo");
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Code requis." }, { status: 400 });
  }

  // Vérifier si le code est valide dans la base de données
  const userAccess = await accessCollection.findOne({ code });

  if (userAccess && userAccess.status === "approved") {
    return NextResponse.json({ authorized: true });
  }

  return NextResponse.json({ authorized: false });
}

// 🔹 Ajouter un code d'accès (Admin uniquement)
export async function POST(req: Request) {
  try {
    const { pseudo, code } = await req.json();

    if (!code) {
      return NextResponse.json(
        { error: "Le code est requis." },
        { status: 400 }
      );
    }

    // Vérifier si le code existe déjà
    const existingCode = await accessCollection.findOne({ code });
    if (existingCode) {
      return NextResponse.json(
        { error: "Ce code existe déjà." },
        { status: 409 }
      );
    }

    // Ajouter le code en attente de validation
    await accessCollection.insertOne({
      pseudo: pseudo || "Anonyme",
      code,
      status: "pending",
    });

    return NextResponse.json({
      message: "Code ajouté en attente de validation.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'ajout du code." },
      { status: 500 }
    );
  }
}

// 🔹 Valider un accès (Admin uniquement)
export async function PATCH(req: Request) {
  try {
    const { code, status } = await req.json();

    if (!code || !status) {
      return NextResponse.json(
        { error: "Code et status requis." },
        { status: 400 }
      );
    }

    // Mise à jour du statut du code
    const result = await accessCollection.updateOne(
      { code },
      { $set: { status } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Code non trouvé." }, { status: 404 });
    }

    return NextResponse.json({ message: `Code mis à jour : ${status}` });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour du code." },
      { status: 500 }
    );
  }
}

// 🔹 Supprimer un code d'accès (Admin uniquement)
export async function DELETE(req: Request) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "Code requis." }, { status: 400 });
    }

    const result = await accessCollection.deleteOne({ code });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Code non trouvé." }, { status: 404 });
    }

    return NextResponse.json({ message: "Code supprimé avec succès." });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la suppression du code." },
      { status: 500 }
    );
  }
}
