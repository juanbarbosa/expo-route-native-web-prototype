import { Link } from 'expo-router';
import { VStack, GluestackUIProvider, Heading } from '@gluestack-ui/themed';

export default function IndexPage() {
  return (
    <GluestackUIProvider>
      <VStack space="lg" padding={"$3"}>
        <Heading>Index page</Heading>
        <Link href="/home">Home</Link>
        <Link href="/settings/">Settings</Link>
        <Link href="/bacon">User Bacon</Link>
      </VStack>
    </GluestackUIProvider>
  );
}