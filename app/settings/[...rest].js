import { VStack, GluestackUIProvider, Heading, Text, Divider } from '@gluestack-ui/themed';
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';

export default function SettingsPathTest() {
  const { glob } = useGlobalSearchParams();
  const { local } = useLocalSearchParams();
  
  return (
    <GluestackUIProvider>
      <VStack space="lg" padding={"$3"}>
        <Heading>Settings Path page</Heading>
        <Text>glob: {glob}</Text>
        <Text>local: {local}</Text>
        <Divider w="$full" variant="horizontal" sx={{bg: "$red500"}} />
        <Link href="/">Index</Link>
      </VStack>
    </GluestackUIProvider>
  );
}