// Sign-in is Firebase Authentication (email/password). The site uses usernames, so each
// username is mapped to a stand-in email on the project's own domain — nothing is ever
// sent to it. The username itself is kept as the account's displayName for the header.
//
// Accounts from the old plaintext `Wrestleverse/LoginDetails/Users` collection are moved
// over the first time each one signs in (see Login.tsx), then their old record is deleted.

import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const usernameToEmail = (username: string) =>
  `${username.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "_")}@wrestleversedatabase.firebaseapp.com`;

/** The signed-in user: `undefined` while Firebase is still restoring the session, `null` when signed out. */
export function useAuthUser() {
  const [user, setUser] = useState<User | null | undefined>(auth.currentUser ?? undefined);
  useEffect(() => onAuthStateChanged(auth, setUser), []);
  return user;
}

// e2e tests run against the dev server without a real account; they set this key to get
// past the route guard (Firestore still needs a real sign-in). Never active in a production build.
export const E2E_USER_KEY = "e2eUser";
export const e2eUser = () => (import.meta.env.DEV ? localStorage.getItem(E2E_USER_KEY) : null);
