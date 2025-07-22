

import { useMemo } from "react";

export const useMyUser = () => {
  const user = useMemo(() => ({
    id: "my-user-id",
    name: "たすく",
    avatarUrl: "/avatar.png",
    device: "PC",
    ingameId: "Tasuku123",
    vcId: "Tasuku#9999",
    visibility: {
      ingameId: "after_match", // "always" | "after_match" | "private"
      vcId: "after_match"
    }
  }), []);

  return user;
};