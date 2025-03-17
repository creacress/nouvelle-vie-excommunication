import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

// 🔹 Connexion à la base de données
const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db("forum");
const pimoPostsCollection = db.collection("pimo_posts");

// 🔹 Définition du type `PimoPost`
interface PimoPost {
  _id: string;
  pseudo: string;
  role: string;
  category: string;
  title: string;
  content: string;
  createdAt: string;
}

// 🔹 GET : Récupérer les posts du forum PIMO
export async function GET() {
  try {
    const posts = await pimoPostsCollection.find({}).sort({ createdAt: -1 }).toArray();

    // 🔹 Transformation explicite des documents MongoDB en objets `PimoPost`
    const formattedPosts: PimoPost[] = posts.map((post) => ({
      _id: post._id.toString(), // Convertir ObjectId en string
      pseudo: post.pseudo || "Anonyme",
      role: post.role || "Non précisé",
      category: post.category || "Autre",
      title: post.title,
      content: post.content,
      createdAt: post.createdAt ? post.createdAt.toISOString() : new Date().toISOString(),
    }));

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error("Erreur lors de la récupération des posts :", error);
    return NextResponse.json({ error: "Erreur lors de la récupération des posts" }, { status: 500 });
  }
}

// 🔹 POST : Ajouter un post PIMO
export async function POST(req: Request) {
  try {
    const { pseudo, role, category, title, content } = await req.json();

    if (!title || !content || !role || !category) {
      return NextResponse.json({ error: "Tous les champs sont obligatoires." }, { status: 400 });
    }

    const newPost = {
      _id: new ObjectId(),
      pseudo,
      role,
      category,
      title,
      content,
      createdAt: new Date(),
    };

    await pimoPostsCollection.insertOne(newPost);
    return NextResponse.json({
      message: "Post ajouté avec succès.",
      post: { ...newPost, _id: newPost._id.toString(), createdAt: newPost.createdAt.toISOString() },
    });
  } catch (error) {
    console.error("Erreur lors de l'ajout du post :", error);
    return NextResponse.json({ error: "Erreur lors de l'ajout du post" }, { status: 500 });
  }
}
