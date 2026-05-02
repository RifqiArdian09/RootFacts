export const APP_CONFIG = {
  detectionConfidenceThreshold: 70,
  analyzingDelay: 2000,
  factsGenerationDelay: 2000,
  detectionRetryInterval: 100,
};

export const TONE_CONFIG = {
  availableTones: [
    {
      value: 'normal',
      label: 'Normal',
      instruction: 'Use a neutral, informative tone.',
    },
    {
      value: 'funny',
      label: 'Lucu 😄',
      instruction:
        'Use a funny, humorous tone with light jokes and playful language.',
    },
    {
      value: 'professional',
      label: 'Profesional 🎓',
      instruction:
        'Use a formal, academic, and professional tone as if writing for a scientific journal.',
    },
    {
      value: 'casual',
      label: 'Santai 😊',
      instruction:
        'Use a casual, friendly, conversational tone as if talking to a friend.',
    },
    {
      value: 'history',
      label: 'Sejarah 📜',
      instruction:
        'Focus on the historical origin, cultural significance, and ancient use of this vegetable.',
    },
  ],
  defaultTone: 'normal',
};

export const isValidDetection = (result) => {
  const { detectionConfidenceThreshold } = APP_CONFIG;
  return result && result.score >= detectionConfidenceThreshold / 100;
};
