/* Seems like layout affect links, when this is enabled I can't get to the root path via the link code * /
import { Slot } from 'expo-router';
import { VStack, GluestackUIProvider, Heading } from '@gluestack-ui/themed';

export default function SettingsLayout() {
  return (
    <GluestackUIProvider>
      <Heading>Settings Header?</Heading>
      <Slot />
    </GluestackUIProvider>
  );
}
/**/