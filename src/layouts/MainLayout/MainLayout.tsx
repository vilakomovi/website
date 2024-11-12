import {Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    Box,
    Container,
    Divider,
    DrawerBody,
    DrawerCloseButton, DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    HStack,
    IconButton,
    Image,
    Link as ChakraLink,
    Text,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import {Link} from 'react-scroll';
import {Drawer, DrawerContent, HamburgerIcon, Stack} from '@chakra-ui/icons';
import Icon from "../../components/Icon";
import {StyledFooter, StyledNavbar} from "./MainLayout.styled.ts";

const ScrollTop = () => {
    const {pathname} = useLocation()

    useEffect(() => {
        const currentScroll = window.scrollY
        if (currentScroll > 0) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }, [pathname])

    return null
}

const MainLayout = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderNavbar = () => {
        return (
            <StyledNavbar
                className="StyledNavbar"
                isScrolled={isScrolled}
                as="header"
            >
                <Container className="app-header" maxWidth="container.xl" py={0}>
                    <Flex justify="space-between" alignItems="center">
                        <HStack spacing={5}>
                            <ChakraLink href="/">
                                <Heading as="h4">
                                    <Image src="/images/Logo Vila Komovi-04.png"/>
                                </Heading>
                            </ChakraLink>
                        </HStack>

                        <HStack spacing="20px"
                                color="#BD8F6F"
                                cursor="pointer"
                                fontSize={20}
                                display={{base: 'none', md: 'flex'}}
                        >
                            <Link className="nav-link" to="gradnja" smooth duration={500} offset={-157}>Gradnja</Link>
                            <Link className="nav-link" to="stanovi" smooth duration={500} offset={-157}>Stanovi</Link>
                            <Link className="nav-link" to="lokacija" smooth duration={500} offset={-157}>Lokacija</Link>
                            <Link className="nav-link" to="kontakt" smooth duration={500} offset={-157}>Kontakt</Link>
                        </HStack>

                        <IconButton
                            aria-label="Open menu"
                            icon={<HamburgerIcon/>}
                            display={{base: "flex", md: "none"}}
                            onClick={onOpen}
                            variant="ghost"
                            color="#BD8F6F"
                            fontSize="2xl"
                        />
                    </Flex>
                </Container>
            </StyledNavbar>
        )
    }

    return (
        <>
            <ScrollTop/>
            {renderNavbar()}

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent backgroundColor="#032827" color="#BD8F6F">
                    <DrawerHeader>
                        <DrawerCloseButton color="#BD8F6F" size="lg" outline="none"/>
                    </DrawerHeader>

                    <DrawerBody justifyContent="center" alignItems="center" display="flex">
                        <VStack spacing="25px" fontSize={42}>
                            <Link to="gradnja" smooth duration={500}>
                                <ChakraLink fontWeight="bold" href="#section2" onClick={onClose}>Gradnja</ChakraLink>
                            </Link>
                            <Link to="stanovi" smooth duration={500}>
                                <ChakraLink fontWeight="bold" href="#section3" onClick={onClose}>Stanovi</ChakraLink>
                            </Link>
                            <Link to="lokacija" smooth duration={500}>
                                <ChakraLink fontWeight="bold" href="#section4" onClick={onClose}>Lokacija</ChakraLink>
                            </Link>
                            <Link to="kontakt" smooth duration={500}>
                                <ChakraLink fontWeight="bold" href="#section5" onClick={onClose}>Kontakt</ChakraLink>
                            </Link>
                        </VStack>
                    </DrawerBody>

                    <Divider borderColor="#BD8F6F" borderWidth="1px" />

                    <DrawerFooter justifyContent="center">
                        <Stack maxW="200px">
                            <Image src="/logo/logo-vila-komovi-01.png"/>
                        </Stack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Box mt={isScrolled ? '157px' : 0}>
                <Outlet/>
            </Box>

            <StyledFooter className="StyledFooter" maxW="full">
                <Container maxWidth="container.xl" fontWeight={100}>
                    <Flex gap={{base: 10, md: 3}} pt={20} pb={20} direction={{base: 'column', md: 'row'}}>
                        <VStack w="full" h="full" alignItems={{base: "center", md: "flex-start"}} gap={5}>
                            <ChakraLink href="/">
                                <img src="/logo/logo-vila-komovi-01.png"/>
                            </ChakraLink>
                            <VStack justifyContent={{base: 'center', md: 'flex-start'}}
                                    alignItems={{base: "center", md: "flex-start"}}>
                                <Text fontWeight={400}>Stambeni objekat: Su+Pr+3+Pk</Text>
                                <Text>Direktna prodaja apartmana na Zlatiboru.</Text>
                            </VStack>
                        </VStack>
                        <VStack w="full" h="full" gap={5}>
                            <Heading as="h4" size="md">Kontakti</Heading>
                            <Flex flexDirection="column" gap={5} alignItems={{base: "center", md: "flex-start"}}>
                                <HStack><Icon icon="phone" size={20}/>
                                    <ChakraLink
                                        className="footer-link"
                                        fontWeight={100}
                                        href="tel:+381654646043"
                                    >
                                        +381 065 4646 043
                                    </ChakraLink>
                                </HStack>
                                <HStack><Icon icon="phone" size={20}/>
                                    <ChakraLink
                                        className="footer-link"
                                        fontWeight={100}
                                        href="tel:+381654646042"
                                    >
                                        +381 065 4646 042
                                    </ChakraLink>
                                </HStack>
                                <HStack><Icon icon="email" size={20}/>
                                    <ChakraLink
                                        className="footer-link"
                                        fontWeight={100}
                                        href="mailto:vila.komovi.zlatibor@gmail.com"
                                    >vila.komovi.zlatibor@gmail.com
                                    </ChakraLink>
                                </HStack>
                                <HStack>
                                    <Icon icon="location" size={20}/>
                                    <Text>Meteorološka 2, Zlatibor 31315</Text>
                                </HStack>
                            </Flex>
                        </VStack>
                        <VStack w="full" h="full" gap={5}>
                            <Heading as="h4" size="md">Pratite nas</Heading>
                            <HStack>
                                <ChakraLink href="https://www.instagram.com/vila_komovi_zlatibor/" isExternal>
                                    <Icon icon="instagram" size={30} color="#BD8F6F"/>
                                </ChakraLink>
                                <ChakraLink href="https://www.facebook.com/profile.php?id=61563036361227" isExternal>
                                    <Icon icon="facebook" size={30} color="#BD8F6F"/>
                                </ChakraLink>
                                <ChakraLink href="https://www.tiktok.com/@vila_komovi_zlatibor" isExternal>
                                    <Icon icon="tiktok" size={30} color="#BD8F6F"/>
                                </ChakraLink>
                            </HStack>
                        </VStack>
                    </Flex>
                    <Divider borderColor="#BD8F6F" />
                    <Flex pt={5} pb={5} flexDirection="column" justifyContent="center" alignItems="center">
                        <Text fontSize="sm">&copy; 2024 Vila Komovi Zlatibor - Sva prava zadržana</Text>
                    </Flex>
                </Container>
            </StyledFooter>
        </>
    );
};

export default MainLayout
