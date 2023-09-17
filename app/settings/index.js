import { VStack, GluestackUIProvider, Heading } from '@gluestack-ui/themed';
import { Link } from 'expo-router';

export default function HomePage() {
    return (
        <GluestackUIProvider>
          <VStack space="lg" padding={"$3"}>
            <Heading>Settings page</Heading>
            <Link href="/settings/test?abc=123&xyz=456">Settings path Test</Link>
            <Link href="/">Index</Link>
          </VStack>
        </GluestackUIProvider>
      );
}