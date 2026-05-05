export const MEDIA = {
  hero_video: "/media/weddingwhitegold.mp4",
  hero_video_2: "/media/whitewedding.mp4",
  hero_video_3: "/media/weddingpink.mp4",
  babyshower_1: "/media/babyshower1.jpg",
  babyshower_2: "/media/babyshower2.jpg",
  babyshower_3: "/media/babyshower3.jpg",
  babyshower_4: "/media/babyshower4.jpg",
  foodmenu: "/media/foodmenu.jpg",
} as const;

export type MediaKey = keyof typeof MEDIA;
