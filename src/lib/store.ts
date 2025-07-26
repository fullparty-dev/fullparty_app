import { create } from "zustand";
import type { Party } from "../types";
import { mockUsers } from "./mockUsers";
import { mockParties } from "./mockParties";
import type { User } from "../types";

export type Mode = "casual" | "rank" | "other";

// Result type for joinParty
type JoinPartyResult = {
  success: boolean;
  message?: string;
  established?: boolean;
  matchedPartyId?: string;
};

type PartyStore = {
  parties: Party[];
  setParties: (parties: Party[]) => void;
  joinParty: (partyId: string, userId: string) => JoinPartyResult;
  leaveParty: (partyId: string, userId: string) => void;
  isUserInParty: (partyId: string, userId: string) => boolean;
  lastJoinedParty: Party | null;
  setLastJoinedParty: (party: Party) => void;
  currentUserId: string;
  matchedPartyId: string | null;
  setMatchedPartyId: (id: string | null) => void;
  selectedGameTitle: string;
  selectedMode: Mode;
  selectedTimeFilter: string;
  setSelectedGameTitle: (title: string) => void;
  setSelectedMode: (mode: Mode) => void;
  setSelectedTimeFilter: (time: string) => void;
};

export const usePartyStore = create<PartyStore>((set, get) => ({
  parties: mockParties,
  setParties: (parties) => set({ parties }),
  selectedGameTitle: 'Apex Legends',
  selectedMode: 'casual',
  selectedTimeFilter: 'now',
  setSelectedGameTitle: (title) => set({ selectedGameTitle: title }),
  setSelectedMode: (mode) => set({ selectedMode: mode }),
  setSelectedTimeFilter: (time) => set({ selectedTimeFilter: time }),
  joinParty: (partyId, userId) => {
    console.log("✅ joinParty called", { partyId, userId });

    const isAlreadyInAnyParty = get().parties.some((party) =>
      party.memberIds.includes(userId)
    );
    if (isAlreadyInAnyParty) {
      console.log("⚠️ User already in a party. Cannot join another.");
      return { success: false, message: "すでに他のパーティに参加中です。" };
    }

    let matchedId: string | null = null;

    const updatedParties = get().parties.map((party) => {
      if (party.id === partyId) {
        if (!party.memberIds.includes(userId)) {
          const updated = {
            ...party,
            memberIds: [...party.memberIds, userId],
          };
          // ✅ 満員または部分マッチ（2人以上）で matchedPartyId を更新
          if (
            (updated.requireFull && updated.memberIds.length === updated.maxMembers) ||
            (!updated.requireFull && updated.memberIds.length >= 2)
          ) {
            matchedId = partyId;
          }
          console.log("🎯 updated party", updated);
          return updated;
        }
      }
      return party;
    });

    // ここで state を更新
    set({ parties: updatedParties });

    if (matchedId) {
      set({ matchedPartyId: matchedId });
    }

    return {
      success: true,
      established: matchedId !== null,
      matchedPartyId: matchedId,
    };
  },
  leaveParty: (partyId, userId) => {
    const updatedParties = get().parties.map((party) => {
      if (party.id === partyId) {
        return {
          ...party,
          memberIds: party.memberIds.filter((id) => id !== userId),
        };
      }
      return party;
    });
    set({ parties: updatedParties });
  },
  isUserInParty: (partyId, userId) => {
    const party = get().parties.find((p) => p.id === partyId);
    return party ? party.memberIds.includes(userId) : false;
  },
  lastJoinedParty: null,
  setLastJoinedParty: (party) => set({ lastJoinedParty: party }),
  currentUserId: "user1",
  matchedPartyId: null,
  setMatchedPartyId: (id) => set({ matchedPartyId: id }),
}));


type UserStore = {
  currentUserId: string;
  setCurrentUserId: (id: string) => void;
  getCurrentUser: () => User | undefined;
  getUserById: (id: string) => User | undefined;
};

export const useUserStore = create<UserStore>((set, get) => ({
  currentUserId: "user1",
  setCurrentUserId: (id) => set({ currentUserId: id }),
  getCurrentUser: () => mockUsers.find((u) => u.id === get().currentUserId),
  getUserById: (id) => mockUsers.find((u) => u.id === id),
}));

// 個別エクスポートを追加
export const currentUserId = useUserStore.getState().currentUserId;
export const setCurrentUserId = useUserStore.getState().setCurrentUserId;
export const getCurrentUser = useUserStore.getState().getCurrentUser;

export const joinParty = usePartyStore.getState().joinParty;
export const leaveParty = usePartyStore.getState().leaveParty;
export const isUserInParty = usePartyStore.getState().isUserInParty;
export const setParties = usePartyStore.getState().setParties;
export const setLastJoinedParty = usePartyStore.getState().setLastJoinedParty;
// --- Evaluation Store ---
type Evaluation = {
  [userId: string]: 'up' | 'down';
};

type EvaluationStore = {
  evaluations: Record<string, Evaluation>;
  setEvaluation: (partyId: string, userId: string, value: 'up' | 'down') => void;
  clearEvaluation: (partyId: string) => void;
  clearEvaluationsForParty: (partyId: string) => void; // ✅ Add this line
};

export const useEvaluationStore = create<EvaluationStore>((set, get) => ({
  evaluations: {},
  setEvaluation: (partyId, userId, value) => {
    const current = get().evaluations[partyId] || {};
    set({
      evaluations: {
        ...get().evaluations,
        [partyId]: { ...current, [userId]: value },
      },
    });
  },
  clearEvaluation: (partyId) => {
    const updated = { ...get().evaluations };
    delete updated[partyId];
    set({ evaluations: updated });
  },
  clearEvaluationsForParty: (partyId) => {
    const updated = { ...get().evaluations };
    delete updated[partyId];
    set({ evaluations: updated });
  },
}));


// --- Party Tab Store ---
type PartyTabStore = {
  selectedMode: Mode;
  selectedTimeFilter: string;
  selectedGameTitle: string;
  setSelectedMode: (mode: Mode) => void;
  setSelectedTimeFilter: (time: string) => void;
  setSelectedGameTitle: (title: string) => void;
  getSelectedMode: () => Mode;
  getSelectedTimeFilter: () => string;
  getSelectedGameTitle: () => string;
};

export const usePartyTabStore = create<PartyTabStore>((set, get) => ({
  selectedMode: undefined as Mode | undefined,
  selectedTimeFilter: undefined,
  selectedGameTitle: undefined,
  setSelectedMode: (mode) => set({ selectedMode: mode }),
  setSelectedTimeFilter: (time) => set({ selectedTimeFilter: time }),
  setSelectedGameTitle: (title) => set({ selectedGameTitle: title }),
  getSelectedMode: () => get().selectedMode || 'casual',
  getSelectedTimeFilter: () => get().selectedTimeFilter || 'now',
  getSelectedGameTitle: () => get().selectedGameTitle || 'Apex Legends',
}));