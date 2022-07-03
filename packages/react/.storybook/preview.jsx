import { IcarusProvider } from "../src/lib/Provider/Provider";

export const decorators = [
  Story => (
    <IcarusProvider>
      <Story />
    </IcarusProvider>
  )
]