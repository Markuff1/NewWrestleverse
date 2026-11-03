// Every match type, with the description shown in the PPV card tooltip and the
// participant counts it can be booked with (used to filter the RAW/Smackdown match
// planner's Match Type dropdown). An empty `participants` list keeps a type out of
// the planner (e.g. "Championship Match" — the planner has its own Championship column).

export type ParticipantCount = "2" | "3" | "4" | "5+" | "2T" | "3T";

export const PARTICIPANT_LABELS: Record<ParticipantCount, string> = {
  "2": "1 vs 1",
  "3": "3 Competitors",
  "4": "4 Competitors",
  "5+": "5+ Competitors",
  "2T": "2 Teams",
  "3T": "3+ Teams",
};

export type MatchTypeDetails = {
  description: string;
  participants: ParticipantCount[];
};

export const MatchTypeInfo: Record<string, MatchTypeDetails> = {
  /* Core Matches */
  "Normal Match": {
    description:
      "The bread-and-butter of wrestling. One fall to a finish. No funny business… in theory.",
    participants: ["2", "3", "4", "5+", "2T", "3T"],
  },

  "Singles Match": {
    description:
      "One-on-one. Just two wrestlers, one ring, and a referee desperately trying to stay alive.",
    participants: ["2"],
  },

  "Tag Team Match": {
    description:
      "Two teams, one legal wrestler at a time. Tags are mandatory, chaos is inevitable.",
    participants: ["2T"],
  },

  "Triple Threat Match": {
    description:
      "Three wrestlers enter, alliances last about 12 seconds. No disqualifications, no mercy.",
    participants: ["3"],
  },

  "Fatal 4-Way Match": {
    description:
      "Four competitors collide. Blink and you might miss the pin while someone argues with the ref.",
    participants: ["4"],
  },


  /* Hardcore / No-DQ */
  "Extreme Rules Match": {
    description:
      "Rules? What rules. Weapons are legal and referees suddenly forget how laws work.",
    participants: ["2", "3", "4","5+", "2T","3T"],
  },

  "No Disqualification Match": {
    description:
      "Anything goes. Literally. If it fits in the arena, it’s probably legal.",
    participants: ["2", "3", "4","5+", "2T","3T"],
  },

  "Falls Count Anywhere Match": {
    description:
      "Falls count anywhere. Backstage, ringside, maybe the parking lot—good luck, cameraman.",
    participants: ["2", "3", "4"],
  },

  "Street Fight": {
    description:
      "No disqualifications, but pins must happen in the ring. Street rules, arena address.",
    participants: ["2", "3", "4","5+", "2T","3T"],
  },

  "Backstage Brawl": {
    description:
      "No ring, no rules. The fight happens anywhere backstage—catering, locker rooms, and production equipment all become weapons.",
    participants: ["2", "3", "4", "2T"],
  },

  /* Gimmick Matches */
  "Ladder Match": {
    description:
      "Climb the ladder, grab the prize, ignore gravity and common sense.",
    participants: ["2", "3", "4","5+", "2T","3T"],
  },

  "Tag Team Ladder Match": {
    description:
      "Teamwork makes the dream work—unless your partner gets powerbombed off a ladder.",
    participants: ["2T", "3T"],
  },

  "Triple Threat Tag Team Ladder Match": {
    description:
      "Three teams, multiple ladders, and at least one spectacular wipeout guaranteed.",
    participants: ["3T"],
  },

  "Money In The Bank Ladder Match": {
    description:
      "6–8 Superstars fight for a briefcase that guarantees future glory and immediate paranoia.",
    participants: ["5+"],
  },

  "Tables Match": {
    description:
      "You win by putting your opponent through a table. Tables strongly disagree with this.",
    participants: ["2", "3", "4","5+", "2T","3T"],
  },

  "Tables Tag Team Match": {
    description:
      "Both opponents must go through tables. One table break is never enough.",
    participants: ["2T"],
  },

  "TLC Match": {
    description:
      "Tables, Ladders, and Chairs. Basically a hardware store with unresolved anger issues.",
    participants: ["2", "3", "4","5+", "2T","3T"],
  },

  "Steel Cage Match": {
    description:
      "Win by pinfall, submission, or escaping the cage—assuming you remember how doors work.",
    participants: ["2", "3", "4", "2T"],
  },

  "Hell In A Cell Match": {
    description:
      "A massive steel structure designed purely to ruin careers and shorten entrances.",
    participants: ["2", "3", "4", "2T"],
  },

  "Wargames Match": {
    description:
      "Two teams battle inside two connected rings surrounded by a steel cage. After all competitors enter, the match officially begins and victory can only be achieved by pinfall or submission.",
    participants: ["2T"],
  },

  "Elimination Chamber Match": {
    description:
      "Locked inside steel and glass. Survive, eliminate everyone else, and try not to panic.",
    participants: ["5+"],
  },

  /* Endurance / Knockout */
  "Last Man Standing Match": {
    description:
      "If your opponent can’t stand by the count of ten, congratulations—you’re still standing.",
    participants: ["2", "3"],
  },

  "Last Woman Standing Match": {
    description:
      "Same brutal rules, same ten count, same refusal to stay down.",
    participants: ["2", "3"],
  },

  "I Quit Match": {
    description:
      "The match only ends when someone says the two most forbidden words in wrestling.",
    participants: ["2"],
  },

  "Iron Man Match": {
    description:
      "Most falls within the time limit wins. Stamina, strategy, and sheer stubbornness required.",
    participants: ["2", "2T"],
  },

  "Submission Match": {
    description:
      "Victory comes only by making your opponent tap out or pass out. Technical skill, pain tolerance, and relentless pressure decide the winner.",
    participants: ["2", "3"],
  },

  "Gauntlet Match": {
    description:
      "One after another, opponents keep coming. Win and the next one walks out—the last superstar standing at the end of the gauntlet wins.",
    participants: ["3", "4", "5+", "3T"],
  },

  /* Specialty */
  "Ambulance Match": {
    description:
      "Victory achieved by stuffing your opponent into an ambulance and slamming the doors shut.",
    participants: ["2"],
  },

  "Casket Match": {
    description:
      "Place your opponent in a casket and close the lid. Subtlety has left the building.",
    participants: ["2"],
  },

  "Inferno Match": {
    description:
      "The ring is surrounded by fire. Winning involves literal flames and zero chill.",
    participants: ["2"],
  },

  "Buried Alive Match": {
    description:
      "Win by burying your opponent alive. Wrestling logic at its finest.",
    participants: ["2"],
  },

  /* Battle Royals */
  "Battle Royal": {
    description:
      "Everyone fights at once. Elimination happens when you’re tossed over the top rope.",
    participants: ["5+"],
  },

  "Royal Rumble Match": {
    description:
      "Timed entrances, surprise returns, and over-the-top eliminations. Winner gets a WrestleMania dream.",
    participants: ["5+"],
  },

  "Special Guest Ref Match": {
    description:
      "A normal match—except the referee may be biased, corrupt, or actively hostile.",
    participants: ["2", "3", "4", "2T"],
  },

  "2 Out of 3 Falls Match": {
    description:
      "First wrestler to score two falls wins. No flukes, no excuses.",
    participants: ["2", "2T"],
  },

  "TLC Triple Threat Tag Team Match": {
    description:
      "Three teams, TLC rules, and absolute mayhem. Insurance companies hate this match.",
    participants: ["3T"],
  },

  "Chairs Match": {
    description:
      "The only legal weapon is a chair. Repeatedly. Loudly.",
    participants: ["2", "3", "2T"],
  },

  "No Holds Barred Match": {
    description:
      "There are no rules, no disqualifications, and no mercy. Anything goes as long as someone stays down.",
    participants: ["2", "3", "4", "2T"],
  },

};
