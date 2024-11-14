import {RefObject, useRef} from "react";
import {Element} from "react-scroll";
import {NavLink} from "react-router-dom";
import {
    Box,
    Center,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Divider,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Link,
    List,
    ListIcon,
    ListItem,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Tr,
    VStack
} from "@chakra-ui/react";

import {apartmentList} from "./constants/global.ts";

import Icon from "./components/Icon";
import LocationMap from "./components/LocationMap";
import {StyledApartmentCardFooter, StyledOverlay} from "./App.styled.ts";

const CheckItem = () => <Icon icon="check" size={20} style={{ marginRight: '5px' }} color="#BD8F6F" />

function App() {
    const flatRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const renderApartmentTable = (floorNumbers: string[], flatNumbers: string[]) => {
        return (
            <Box width="100%" overflowX="auto">
                <Table size="sm" variant="striped">
                    <Tbody fontSize="xs">
                        {/* First Row */}
                        <Tr>
                            <Th fontSize={10}>Sprat</Th>
                            {floorNumbers.map((item: string, i: number) => (<Td key={i}>{item}</Td>))}
                        </Tr>

                        {/* Second Row */}
                        <Tr>
                            <Th fontSize={10}>Broj stana</Th>
                            {flatNumbers.map((item: string, i: number) => (<Td key={i}>{item}</Td>))}
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        );
    }

    const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const renderApartmentList = () => apartmentList.map((apartment) => (
        <Card maxW="md">
            <CardHeader>
                <HStack justifyContent="space-between">
                    <Heading as="h4" size="xl" color="#ffffff" padding="5px 10px" backgroundColor="#BD8F6F">{apartment.title}</Heading>
                    <Heading as="h4" size="xl" color="#BD8F6F">{apartment.squareFootage} m&sup2;</Heading>
                </HStack>
                <HStack mt={5}>
                    {renderApartmentTable(apartment.floorNumbers, apartment.flatNumbers)}
                </HStack>
            </CardHeader>
            <CardBody>
                <VStack w="full" h="full" spacing={10} alignItems="flex-start">
                    <Image maxW="350px" w="100%" className="apartment-item" src={apartment.image} />
                </VStack>
            </CardBody>
            <Divider color="#CBD5E0" />
            <CardFooter>
                <StyledApartmentCardFooter className="StyledApartmentCardFooter" w="full">
                    <NavLink className="card-link" to={`/apartment/${apartment.node}`}>Pogledajte detaljnije</NavLink>
                    <Link href={apartment.pdf} isExternal>
                        <Button
                            gap={2} size="sm"
                            fontWeight={100}
                            variant="outline"
                            _hover={{
                                borderColor: '#BD8F6F',
                            }}
                        >
                            <Icon icon="file-pdf" size={20} color="#E53E3E" />
                            <Text>Preuzmi PDF</Text>
                        </Button>
                    </Link>
                </StyledApartmentCardFooter>
            </CardFooter>
        </Card>
    ))

    const renderIntroSection = () => {
        return (
            <Container
                maxWidth="100%"
                backgroundColor="#032827"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundImage="linear-gradient(rgba(3, 40, 39, 0.9), rgba(3, 40, 39, 0.9)), url('/images/intro.jpg')"
            >
                <Container maxWidth="container.xl">
                    <Flex
                        p={{ base: '50px 0', md: '160px 0' }}
                        alignItems="center"
                        gap={10}
                    >
                        <VStack w="full" h="full" spacing={10} alignItems="center" justify="space-between">
                            <VStack alignItems="flex-start" h="full" spacing={10} justifyContent="center">
                                <Heading
                                    as="h1"
                                    size={{ base: '3xl', md: '4xl' }}
                                    color="#BD8F6F"
                                    lineHeight={{ base: 1.5, md: 1.2 }}
                                    maxW={{ base: '100%', md: '60%'}}
                                >Direktna prodaja apartmana na Zlatiboru
                                </Heading>
                                <Button
                                    size="lg"
                                    color="#032827"
                                    fontWeight={400}
                                    backgroundColor="#BD8F6F"
                                    borderRadius={0}
                                    border="none"
                                    variant="outline"
                                    onClick={() => scrollToSection(flatRef)}
                                    _hover={{
                                        backgroundColor: "#BD8F6F",
                                        color: '#FFFFFF',
                                        borderColor: '#BD8F6F',
                                    }}
                                >
                                    Ponuda stanova
                                </Button>
                                <Text
                                    fontSize="2xl"
                                    color="#BD8F6F"
                                >Vila Komovi Zlatibor nudi jedinstvenu priliku da postanete vlasnik stana na ekskluzivnoj lokaciji na Zlatiboru, različitih raspona struktura kreiranih po Vašim potrebama - od 37m&sup2; do 46m&sup2;.
                                </Text>

                                <VStack spacing={10} alignItems="center" justifyContent="center" flexDirection={{ base: 'column', md: 'row' }}>

                                    <Button
                                        size="lg"
                                        color="#032827"
                                        fontWeight={400}
                                        backgroundColor="transparent"
                                        borderRadius={0}
                                        border="2px solid #BD8F6F"
                                        variant="outline"
                                        _hover={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        <Icon icon="mobile" width={50} height={20} color="#BD8F6F" />
                                        <Link color="#BD8F6F" style={{ textDecoration: 'none' }} href="tel:+381654646043">+381 65 4646 043</Link>
                                    </Button>

                                    <Button
                                        size="lg"
                                        color="#032827"
                                        fontWeight={400}
                                        backgroundColor="transparent"
                                        borderRadius={0}
                                        border="2px solid #BD8F6F"
                                        variant="outline"
                                        _hover={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        <Icon icon="mobile" width={50} height={20} color="#BD8F6F" />
                                        <Link color="#BD8F6F" style={{ textDecoration: 'none' }} href="tel:+381654646042">+381 65 4646 042</Link>
                                    </Button>
                                </VStack>
                            </VStack>
                        </VStack>
                    </Flex>
                </Container>
            </Container>
        )
    }

    const renderIntroImageSection = () => {
        return (
            <Container overflow="hidden" maxWidth="100%" w="100%" height={{ base: 'auto', md: '800px' }} position="relative" p={0}>
                <StyledOverlay className="StyledOverlay" />
                <Image src="/images/naslovna.jpg" alt="Naslovna" style={{ objectFit: 'cover', width: '100%', zIndex: -1, position: 'relative' }} objectPosition={{ base: '0 0', md: '0 0px' }}/>
            </Container>
        )
    }

    const renderConstructionSection = () => {
        return (
            <Element name="gradnja">
                <Container
                    className="construction-section"
                    maxWidth="container.2xl"
                    p={{ base: '50px 0', md: '60px 0' }}
                >
                    <Flex flexDirection="column" p="0 1.25rem">
                        <HStack flexDirection="column">
                            <Heading as="h3" size="md" style={{ textTransform: 'uppercase' }}>Gradnja</Heading>
                            <Heading as="h2" size="lg">Naš glavni fokus je kvalitet gradnje</Heading>
                            <Text align={{ base: 'left', md: 'center' }} mb={5} maxWidth="container.xl">
                                Kada se radi o kupatilu, kvalitet sanitarija je ključan. Naši stanovi dolaze sa najkvalitetnijim sanitarnim uređajima, uključujući tuš kabine, slavine i keramičke pločice. Ovi uređaji su pažljivo odabrani kako bi pružili najbolje performanse, kao i moderni izgled.
                            </Text>
                        </HStack>
                    </Flex>
                    <Flex gap="2rem" justifyContent="center" flexDirection={{ base: 'column', md: 'row' }}>
                        <Card maxW="md">
                            <CardHeader>
                                <Image src="/images/kupatilo.jpg" objectFit="cover" h="200px" w="100%" />
                            </CardHeader>
                            <CardBody>
                                <VStack w="full" h="full" spacing={10} alignItems="flex-start">
                                    <Heading as="h2" size="xl" mb={1}>Kvalitet sanitarija</Heading>
                                    <Text>Kada se radi o kupatilu, kvalitet sanitarija je ključan. Naši apartmani dolaze sa najkvalitetnijim sanitarnim uređajima, uključujući tuš kabine, slavine i keramičke pločice. Sanitarije opremljene naprednim sistemima za uštedu vode, smanjujući potrošnju i brinući o životnoj sredini. Elegantne linije i savremeni dizajn sanitarija donose luksuz i stil u svaku kupatilo.</Text>
                                </VStack>
                            </CardBody>
                            <Divider color="#CBD5E0" />
                            <CardFooter>
                                <List styleType="none" spacing={3}>
                                    <ListItem>
                                        <ListIcon as={CheckItem} /> Premium materijali
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckItem} /> Tanki ,,Elektroluks” bojleri</ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckItem} /> Uvozna keramika</ListItem>
                                </List>
                            </CardFooter>
                        </Card>

                        <Card maxW="md">
                            <CardHeader>
                                <Image src="/images/izolacija.jpg" objectFit="cover" h="200px" w="100%" />
                            </CardHeader>
                            <CardBody>
                                <VStack w="full" h="full" spacing={10} alignItems="flex-start">
                                    <Heading as="h2" size="xl" mb={1}>Zidovi i izolacija</Heading>
                                    <Text>Kvalitetna izolacija i zidovi su od vitalnog značaja za vaš dom. Naši zidovi su izgrađeni od najkvalitetnijih materijala, što osigurava dugotrajnost i čvrstoću. Dodatno, naši stanovi dolaze sa visokokvalitetnom izolacijom, koja će vam pomoći da uštedite novac na računima za grejanje i hlađenje.</Text>
                                </VStack>
                            </CardBody>
                            <Divider color="#CBD5E0" />
                            <CardFooter>
                                <List spacing={3}>
                                    <ListItem><ListIcon as={CheckItem} /> Visokokvalitetni materijali</ListItem>
                                    <ListItem><ListIcon as={CheckItem} /> Toplotna izolacija</ListItem>
                                    <ListItem><ListIcon as={CheckItem} /> Terase od stakla</ListItem>
                                </List>
                            </CardFooter>
                        </Card>

                        <Card maxW="md">
                            <CardHeader>
                                <Image src="/images/stolarija.jpg" objectFit="cover" h="200px" w="100%" />
                            </CardHeader>
                            <CardBody>
                                <VStack w="full" h="full" spacing={10} alignItems="flex-start">
                                    <Heading  as="h2" size="xl" mb={1}>Dugotrajna stolarija</Heading>
                                    <Text>Kada birate stolariju, ne samo da tražite kvalitet i dugotrajnost, već i estetski izgled. Naši stanovi imaju najkvalitetniju stolariju koja je pažljivo odabrana kako bi pružila najbolje performanse, kao i moderan i elegantan izgled. Specijalna tehnologija omogućava izolaciju od spoljašnje buke, pružajući mir i tišinu u vašem domu.</Text>
                                </VStack>
                            </CardBody>
                            <Divider color="#CBD5E0" />
                            <CardFooter>
                                <List spacing={3}>
                                    <ListItem><ListIcon as={CheckItem} /> Troslojni hrastov parket</ListItem>
                                    <ListItem><ListIcon as={CheckItem} /> Dugotrajnost i otpornost</ListItem>
                                    <ListItem><ListIcon as={CheckItem} /> Fasadna stolarija sa roletnama u boji hrasta</ListItem>
                                </List>
                            </CardFooter>
                        </Card>
                    </Flex>
                </Container>
            </Element>
        )
    }

    const renderApartmentsSection = () => {
        return (
            <Element name="stanovi">
                <Container
                    className="apartments-section"
                    maxWidth="full"
                    backgroundColor="#032827"
                    ref={flatRef}
                    p={{ base: '50px 0', md: '60px 0' }}
                >
                    <Container maxWidth="container.xl">
                        <Flex flexDirection="column" gap={10} textAlign={{ base: 'center', md: 'center' }}>
                            <HStack flexDirection="column">
                                <Heading as="h3" size="md" style={{ textTransform: 'uppercase' }} color="#ffffff">
                                    Apartmani
                                </Heading>
                                <Heading as="h2" size="lg">
                                    Izaberite apartman po vašoj meri
                                </Heading>
                                <Text
                                    textAlign={{ base: 'center', md: 'center' }}
                                    mb="40px" maxWidth="container.xl"
                                    color="#ffffff"
                                >
                                    Pronađite idealan apartman na Zlatiboru. Naša ponuda uključuje različite apartmane koji mogu zadovoljiti sve vaše želje i potrebe.
                                </Text>
                            </HStack>
                        </Flex>

                        <Flex gap="2rem" justifyContent="center" flexWrap="wrap">
                            {renderApartmentList()}
                        </Flex>
                    </Container>
                </Container>
            </Element>
        )
    }

    const renderTrustSection = () => {
        return (
            <Container
                maxWidth="full"
                style={{ background: 'url("/dot.png") 0 0 repeat' }}
                borderTop="1px solid #BD8F6F"
                p={{ base: '50px 0', md: '60px 0' }}
            >
                <Container maxWidth="container.2xl">
                    <Flex flexDirection="column" gap={10} textAlign={{ base: 'center', md: 'left' }}>
                        <HStack flexDirection="column">
                            <Heading as="h3" size="md" style={{ textTransform: 'uppercase' }}>Poverenje</Heading>
                            <Heading as="h2" size="lg">Izaberite pouzdanog partnera</Heading>
                            <Text
                                align={{ base: 'center', md: 'center' }}
                                mb={5}
                                maxWidth="container.xl"
                            >
                                Dozvolite nam da vas uverimo da smo pravi izbor kada je u pitanju kupovina stanova. Fokusirani smo na visok kvalitet gradnje, pažljivo biramo lokacije, tako da se naši kupci mogu osećati uvek sigurno i zadovoljno svojim izborom.
                            </Text>
                        </HStack>

                        <Center>
                            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ base: 10, md: 20 }} maxWidth="container.xl">
                                <GridItem>
                                    <HStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={5} flexDirection={{ base: 'column', md: 'row' }}>
                                        <Icon icon="house" size={50} />
                                        <VStack alignItems={{ base: 'center', md: 'flex-start' }}>
                                            <Heading as="h4" size="md">Kvalitet gradnje je naš prioritet</Heading>
                                            <Text>Naši stanovi su izgrađeni od najkvalitetnijih materijala i prate najviše standarde u građevinarstvu.</Text>
                                        </VStack>
                                    </HStack>
                                </GridItem>
                                <GridItem>
                                    <HStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={5} flexDirection={{ base: 'column', md: 'row' }}>
                                        <Icon icon="power" size={50} />
                                        <VStack alignItems={{ base: 'center', md: 'flex-start' }}>
                                            <Heading as="h4" size="md">Uštedite novac na računima za energiju</Heading>
                                            <Text>Naši stanovi su energetski efikasni i izgradjeni su po najvišim standardima.</Text>
                                        </VStack>
                                    </HStack>
                                </GridItem>
                                <GridItem>
                                    <GridItem>
                                        <HStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={5} flexDirection={{ base: 'column', md: 'row' }}>
                                            <Icon icon="office" size={50} />
                                            <VStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={5} flexDirection="column">
                                                <Heading as="h4" size="md">Uživajte u životu u gradu</Heading>
                                                <Text>Naši stanovi su smešteni u mirnom delu Zlatibora, sklonjeni od gradske buke.</Text>
                                            </VStack>
                                        </HStack>
                                    </GridItem>
                                </GridItem>

                                {/*
                                <GridItem>
                                    <GridItem>
                                        <HStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={5} flexDirection={{ base: 'column', md: 'row' }}>
                                            <Icon icon="dash" size={50} />
                                            <VStack alignItems="flex-start">
                                                <Heading as="h4" size="md">Bez brige o parkiranju</Heading>
                                                <Text>Naši stanovi dolaze sa obezbeđenim parking mestima ili garažama, tako da se ne morate brinuti o parkiranju.</Text>
                                            </VStack>
                                        </HStack>
                                    </GridItem>
                                </GridItem>
                                <GridItem>
                                    <GridItem>
                                        <HStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={5} flexDirection={{ base: 'column', md: 'row' }}>
                                            <Icon icon="laptop" size={50} />
                                            <VStack alignItems="flex-start">
                                                <Heading as="h4" size="md">Sigurnost na prvom mestu</Heading>
                                                <Text>Naši stanovi su opremljeni najsavremenijim sistemima za bezbednost, kao što su video nadzor i interfon.</Text>
                                            </VStack>
                                        </HStack>
                                    </GridItem>
                                </GridItem>
                                <GridItem>
                                    <GridItem>
                                        <HStack alignItems={{ base: 'center', md: 'flex-start' }} spacing={5} flexDirection={{ base: 'column', md: 'row' }}>
                                            <Icon icon="service" size={50} />
                                            <VStack alignItems="flex-start">
                                                <Heading as="h4" size="md">Prostrani i funkcionalni prostori</Heading>
                                                <Text>Naši stanovi su dizajnirani sa pažnjom prema detaljima, tako da nude prostrane i funkcionalne prostore za vašu udobnost i zadovoljstvo.</Text>
                                            </VStack>
                                        </HStack>
                                    </GridItem>
                                </GridItem>
                                */}
                            </Grid>
                        </Center>
                    </Flex>
                </Container>
            </Container>
        )
    }

    const renderLocationSection = () => {
        return (
            <Element name="lokacija">
                <Container
                    maxWidth="full"
                    ref={locationRef}
                >
                    <Container
                        maxWidth="container.xl"
                        p={{ base: '50px 0', md: '60px 0' }}
                    >
                        <Flex flexDirection="column" gap={10}>
                            <HStack flexDirection="column">
                                <Heading as="h3" size="md" style={{ textTransform: 'uppercase' }}>Lokacija</Heading>
                                <Heading as="h2" size={{ base: 'md', md: 'lg' }}>Meteorološka 2, Zlatibor 31315</Heading>
                                <Text align={{ base: 'left', md: 'center' }} mb={5} maxWidth="container.xl">Vila Komovi Zlatibor se nalazi u naselju Sloboda, na uglu Andrije Jevremovića i Meteorološke ulice i graniči se sa hotelom Zlatiborske terase koji poseduje restoran, bazen i spa centar. U blizini Vile je trgovinski lanac ,,Maxi” , prodavnice, pekara i restorani, kao i ostali sadržaji, dok se sa terasa stanova pruža predivan i trajan pogled na zlatiborske planinske vrhove Tornik, Čigotu i Gradinu.</Text>
                            </HStack>
                        </Flex>
                    </Container>
                    <LocationMap />
                </Container>
            </Element>
        )
    }

    const renderContactSection = () => {
        return (
            <Element name="kontakt">
                <Container maxWidth="full" pb={20} style={{ background: 'url("/dot.png") 0 0 repeat' }} ref={contactRef}>
                    <Container maxWidth="container.xl">
                        <Flex p={{ base: 5, md: 20 }} flexDirection="column" gap={10}>
                            <HStack flexDirection="column">
                                <Heading as="h3" size="md" style={{ textTransform: 'uppercase' }}>Kontakt</Heading>
                                <Heading as="h2" size="lg">Kontaktirajte nas</Heading>
                                <Text textAlign="center">Za sve informacije u vezi projekta Vila Komovi Zlatibor, kupovine apartmana, parking mesta, kontaktirajte nas.</Text>
                            </HStack>
                        </Flex>

                        <Flex direction="column" justifyContent="center" alignItems="center">
                            <HStack gap={10} flexDirection={{ base: "column", md: "row" }}>
                                <Button size="lg" color="#032827" fontWeight={400} backgroundColor="transparent" borderRadius={0} border="2px solid #BD8F6F" variant="outline" _hover={{
                                    backgroundColor: "#BD8F6F",
                                    color: '#FFFFFF',
                                    borderColor: '#BD8F6F',
                                }}>
                                    <Icon icon="mobile" width={50} height={20} />
                                    <Link style={{ textDecoration: 'none' }} href="tel:+381654646043">+381 65 4646 043</Link>
                                </Button>
                                <Button size="lg" color="#032827" fontWeight={400} backgroundColor="transparent" borderRadius={0} border="2px solid #BD8F6F" variant="outline"  _hover={{
                                    backgroundColor: "#BD8F6F",
                                    color: '#FFFFFF',
                                    borderColor: '#BD8F6F',
                                }}>
                                    <Icon icon="mobile" width={50} height={20} />
                                    <Link style={{ textDecoration: 'none' }} href="tel:+381654646042">+381 65 4646 042</Link>
                                </Button>
                            </HStack>
                        </Flex>

                        {/*<Flex direction="column" gap={10}>
                        <form>
                            <Stack spacing={5}>
                                <FormControl>
                                    <FormLabel>Vaše ime i prezime</FormLabel>
                                    <Input type='text' placeholder="Unesite vaše ime i prezime" backgroundColor="#ffffff" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Vaša e-mail adresa</FormLabel>
                                    <Input type='email' placeholder="Unesite vašu e-mail adresa" backgroundColor="#ffffff" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Vaš telefon</FormLabel>
                                    <Input type='tel' placeholder="Unesite vaš broj telefona" backgroundColor="#ffffff" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Ostavite nam poruku</FormLabel>
                                    <Textarea
                                        // value={value}
                                        // onChange={handleInputChange}
                                        placeholder='Vaša poruka'
                                        size='sm'
                                        backgroundColor="#ffffff"
                                    />
                                </FormControl>
                                <FormControl>
                                    <Button size="lg" variant="outline" fontWeight={400} backgroundColor="#1192E5" color="#ffffff">Pošalji</Button>
                                </FormControl>
                            </Stack>
                        </form>
                    </Flex>*/}
                    </Container>
                </Container>
            </Element>
        )
    }

    return (
        <>
            {/* Intro */}
            {renderIntroSection()}

            {/* Intro image */}
            {renderIntroImageSection()}

            {/* Construction */}
            {renderConstructionSection()}

            {/* Apartments */}
            {renderApartmentsSection()}

            {/* Trust */}
            {renderTrustSection()}

            <Divider />

            {/* Location */}
            {renderLocationSection()}

            {/* Contact */}
            {renderContactSection()}


            {/*<div className="app-intro">
                <img src="/images/intro.jpg" alt="intro image" style={{ objectFit: 'cover', filter: 'blur(10px)' }}/>
            </div>*/}
        </>
    )
}

export default App
