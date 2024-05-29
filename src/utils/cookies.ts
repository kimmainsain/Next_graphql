"use server";

import { cookies } from "next/headers";

export async function setCookie(name: string, value: string) {
  cookies().set({
    name,
    value,
  });
}

export async function getCookie(name: string) {
  return cookies().get(name)?.value;
}

export async function deleteCookie(name: string) {
  cookies().delete(name);
}

export async function getAllCookies() {
  return cookies().getAll();
}

export async function hasCookie(name: string) {
  return cookies().has(name);
}
