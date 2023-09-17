import { VStack, GluestackUIProvider, Heading } from '@gluestack-ui/themed';
import { Link } from 'expo-router';

export default function HomePage() {
    return (
        <GluestackUIProvider>
          <VStack space="lg" padding={"$3"}>
            <Heading>Home page</Heading>
            <Link href="/">Index</Link>
          </VStack>
        </GluestackUIProvider>
      );
}