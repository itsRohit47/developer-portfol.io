"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  console.log(formData.get("uname") as string);
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        user_name: formData.get("uname") as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  redirect("/");
}

export async function claimUsername(prevState: any, formData: FormData) {
  const supabase = createClient();
  const username = formData.get("username") as string;

  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("username", username);

  if (error) {
    console.log("An error occurred. Please try again.");
    return {
      message: "error occurred. Please try again.",
    };
  }

  if (data?.length ?? 0 > 0) {
    console.log("Username already taken. Please try another.");
    return {
      message: "username already taken. Please try another.",
    };
  }

  console.log("Username available!");
  return {
    message: "username available!",
  };
}

export async function getUserProfile() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profiles, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single(); // Assuming there is only one profile per user

  if (profileError) {
    throw new Error(`Error fetching profile: ${profileError.message}`);
  }

  return profiles;
}
