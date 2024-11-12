import {NavLink, useParams} from "react-router-dom"
import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    Text,
    VStack,
    Table,
    TableContainer,
    Tbody,
    Tr,
    Td,
} from "@chakra-ui/react";
import Icon from "../../components/Icon";
import {apartmentList} from "../../constants/global.ts";

const ApartmentNode = () => {
    const { apartmentId } = useParams<{ apartmentId: string }>()
    const apartmentNode = apartmentList.find((apartment) => apartment.node === apartmentId)

    const mapApartments = {
        s1: '/pdfImages/1-STAN-01.png',
        s2: '/pdfImages/2-STAN-02,07,12,17,22.png',
        s3: '/pdfImages/3-STAN-03,08,13,18,23.png',
        s4: '/pdfImages/4-STAN-04,09,14,19,24.png',
        s5: '/pdfImages/5-STAN-05,10,15,20.png',
        s6: '/pdfImages/6-STAN-06,11,16,21.png',
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const image = mapApartments[apartmentId]

    const similarApartments = apartmentList.filter(apartment => apartment.node !== apartmentId).slice(0, 3)

    const renderSimilarApartmentList = () => similarApartments.map((similarApartment) => {
        return (
            <Card maxW="md">
                <CardHeader display="flex" justifyContent="space-between">
                    <Heading as="h3">{similarApartment.title}</Heading>
                    <Heading as="h4" size="md" color="#BD8F6F">{similarApartment.squareFootage} m&sup2;</Heading>
                </CardHeader>
                <CardBody>
                    <VStack w="full" h="full" spacing={10} alignItems="flex-start">
                        <Image maxW="350px" w="100%" className="apartment-item" src={similarApartment.image} />
                    </VStack>
                </CardBody>
                <Divider color="#CBD5E0" />
                <CardFooter>
                    <HStack w="full" justifyContent="space-between">
                        <NavLink className="animated-link" to={`/apartment/${similarApartment.node}`}>Pogledajte detaljnije</NavLink>
                    </HStack>
                </CardFooter>
            </Card>
        )
    })

    return (
        <>
            <Container maxWidth="container.xl" mt="40px">
                <Flex flexDirection={{ base: 'column', md: 'row' }} gap={10} justifyContent="space-between" alignItems="flex-end">
                    <VStack w="full" p={0} m={0} justifyContent="left" alignItems="flex-start">
                        <HStack mb={10}>
                            <Icon icon="arrow-left" width={50} height={20} /> <NavLink className="animated-link" to="/">Početna strana</NavLink>
                        </HStack>

                        <Heading as="h1" fontWeight={200} mb={3}>Detalji apartmana:</Heading>
                        <Heading as="h3">{apartmentNode?.title}</Heading>
                        <Heading as="h2">{apartmentNode?.squareFootage} m&sup2;</Heading>

                        <Link href={apartmentNode?.pdf} isExternal>
                            <Button gap={2} variant="outline" size="lg" fontWeight={300}>
                                <Icon icon="file-pdf" size={20} color="#E53E3E" /> <Text>Preuzmite PDF dokument</Text>
                            </Button>
                        </Link>

                        <TableContainer w="full" mt="40px">
                            <Table variant="striped">
                                <Tbody>
                                    {apartmentNode?.information.map((item, i) => (
                                        <Tr key={i}>
                                            <Td p={{ base: '10px 15px', md: '1rem 1.5rem' }}>{item.label}</Td>
                                            <Td>{item.value}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </VStack>

                    <Card p={5} backgroundColor="#BD8F6F" color="#ffffff">
                        <Flex flexDirection="row" gap={3} justifyContent="space-between">
                            <HStack>
                                <Icon icon="info" size={50} color="#ffffff" />
                            </HStack>
                            <Text>Za sve informacije oko kupovne apartmana, slobodno nas pozovite. Rado ćemo odgovoriti na sva Vaša pitanja.</Text>
                        </Flex>
                    </Card>
                </Flex>

                <Flex flexDirection="column" mb={10}>
                    <Image width="100%" src={image} />
                </Flex>
            </Container>

            <Divider />

            <Container maxW="100%" backgroundColor="#EDF2F7" pt={10} pb={10}>
                <Container maxW="container.xl">
                    <Flex flexDirection="column" mb={10} mt={10}>
                        <Heading>Slični apartmani</Heading>
                        <Flex justifyContent="space-between" flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 5, md: 0 }}>
                            {renderSimilarApartmentList()}
                        </Flex>
                    </Flex>
                </Container>
            </Container>
        </>
    );
};

export default ApartmentNode;
