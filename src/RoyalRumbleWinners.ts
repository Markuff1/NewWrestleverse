// Every Royal Rumble win, one entry per year. Add an entry each time
// someone wins the Royal Rumble match — win counts (and the "x2" suffix
// shown on a wrestler's profile pop-up) are derived automatically from how
// many times their name appears here, so there's nothing else to update.
export type RoyalRumbleWin = {
  name: string;
  year: number;
};

export const royalRumbleWinners: RoyalRumbleWin[] = [
  // { name: "Cody Rhodes", year: 2024 },
  { name: "The Rock", year: 2026 },
  { name: "Jade Cargill", year: 2026 },

  { name: "Rey Mysterio", year: 2027 },
  { name: "Liv Morgan", year: 2027 },
];
