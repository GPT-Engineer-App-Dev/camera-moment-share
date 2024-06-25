import { Container, VStack, Heading, Box, Button, Input, Image, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl">Photo Sharing Platform</Heading>
        <Box width="100%" textAlign="center">
          <Input type="file" accept="image/*" onChange={handleImageUpload} display="none" id="upload-input" />
          <Button as="label" htmlFor="upload-input" leftIcon={<FaUpload />} colorScheme="teal">
            Upload Photo
          </Button>
        </Box>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} width="100%">
          {images.map((src, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={src} alt={`Uploaded ${index}`} />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;