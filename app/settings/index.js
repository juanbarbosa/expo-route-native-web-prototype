import { Pressable } from "react-native";
import { VStack, GluestackUIProvider, Heading, Text } from '@gluestack-ui/themed';
import { Link, router } from 'expo-router';

export default function HomePage() {
  const goBackToMain = () => {
    if (router.canGoBack) {
      router.back();
    }
  }

  return (
      <GluestackUIProvider>
        <VStack space="lg" padding={"$3"}>
          <Heading>Settings page</Heading>
          <Link href="/settings/test?abc=123&xyz=456">Settings path Test</Link>
          <Link href="/">This link will not take you to root when I'm inside a layout, you need to force your way back with the router</Link>
          <Pressable onPress={goBackToMain}>
            <Text>Go Back</Text>
          </Pressable>
        </VStack>
      </GluestackUIProvider>
    );
}