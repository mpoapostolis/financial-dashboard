"use server";
import { getPb } from "@/lib/pb";
import { revalidatePath } from "next/cache";

export async function editTheme(formData: FormData) {
  const theme = formData.get("theme");
  const pb = getPb();
  const myId = pb.authStore.model?.id;
  const currentUiTheme = pb.authStore.model?.ui_state ?? {};
  await pb.collection("users").update(myId, {
    ui_state: {
      ...currentUiTheme,
      theme,
    },
  });
  return revalidatePath("/");
}

export async function editExpandMenu(formData: FormData) {
  const pb = getPb();
  const myId = pb.authStore.model?.id;
  const currentUiTheme = pb.authStore.model?.ui_state ?? {};
  await pb.collection("users").update(myId, {
    ui_state: {
      ...currentUiTheme,
      expandedMenu: !currentUiTheme.expandedMenu,
    },
  });
  return revalidatePath("/");
}
