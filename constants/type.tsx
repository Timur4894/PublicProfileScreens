export interface rewardCard {
  text: string;
  logo: string;
  backgroundColor: string;
}

export interface UserData {
  photoPath: string;
  nickname: string;
  globalRank: number;
  continentRank: number;
  points: number;
  solvedRiddles: number;
  rewards: {
    reward: rewardCard[];
  };
}
