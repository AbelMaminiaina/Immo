export const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const randomDelay = (min: number = 200, max: number = 500): Promise<void> => {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min
  return simulateDelay(delay)
}
