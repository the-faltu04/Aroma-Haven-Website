export type AuthMethod = "email-password" | "google" | "phone-otp";

export type SessionPrincipal = {
  userId: string;
  role: "CUSTOMER" | "OWNER" | "MANAGER" | "STAFF";
  expiresAt: Date;
};

/** Provider-neutral contract; concrete auth methods remain undecided by the owner. */
export interface AuthAdapter {
  getSession(cookieHeader: string | null): Promise<SessionPrincipal | null>;
  revokeSession(sessionId: string): Promise<void>;
}
