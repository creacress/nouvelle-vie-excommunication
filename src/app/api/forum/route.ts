import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

// 🔹 Définition du type Post
interface Post {
  _id: ObjectId;
  username: string;
  category: string;
  title: string;
  content: string;
  createdAt: Date;
}

// 🔹 Connexion à la base de données
const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db("forum");
const postsCollection = db.collection<Post>("posts");

// 🔹 Récupérer tous les posts
export async function GET() {
  try {
    const posts: Post[] = await postsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des posts" },
      { status: 500 }
    );
  }
}

// 🔹 Ajouter un post
export async function POST(req: Request) {
  try {
    const { username, category, title, content } = await req.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: "Le titre et le contenu sont requis." },
        { status: 400 }
      );
    }

    const newPost: Post = {
      _id: new ObjectId(),
      username: username || "Anonyme",
      category: category || "Général",
      title,
      content,
      createdAt: new Date(),
    };

    await postsCollection.insertOne(newPost);
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'ajout du post" },
      { status: 500 }
    );
  }
}
