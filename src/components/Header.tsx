import { Box, Image, Text, Flex, Divider } from "@chakra-ui/react";

import { SwiperCarrousel } from './Swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

export function Header() {
    return (
        <Box>
            <Box
                backgroundImage="url('/images/Background.png')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="100%"
                width="100%"
                height="330px"
                marginBottom="32px"
            // display="flex"

            >
                <Flex
                    maxW="1120px"
                    m="auto"
                    align="center"
                    justify="space-between"
                    position="relative"
                >
                    <Flex direction="column" height="180px" justify="space-between" >
                        <Text
                            fontSize="3xl"
                            width="400px"
                            fontWeight="500"
                            color="#F5F8FA"
                        >5 Continentes, infinitas possibilidades.</Text>
                        <Text
                            fontSize="md"
                            width="400px"
                            color="#DADADA"
                        >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                    </Flex>
                    <Image
                        src="/images/Airplane.png"
                        alt="Airplane"
                        right="0"
                        top="0"
                        marginTop="80px"
                        marginRight="30px"
                        transform="rotate(3deg)"
                    />
                </Flex>
            </Box>

            <Flex
                align="center"
                justify="space-around"
                mt="32"
            >
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                >
                    <Image boxSize="85px" objectFit="cover" src="/cocktail.svg" />
                    <Text
                        mt="5"
                        color="#47585B"
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="1rem"
                    >vida noturna</Text>
                </Flex>

                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                >
                    <Image boxSize="85px" objectFit="cover" src="/surf.svg" />
                    <Text
                        mt="5"
                        color="#47585B"
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="1rem"
                    >praia</Text>
                </Flex>

                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                >
                    <Image boxSize="85px" objectFit="cover" src="/building.svg" />
                    <Text
                        mt="5"
                        color="#47585B"
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="1rem"
                    >moderno</Text>
                </Flex>

                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                >
                    <Image boxSize="85px" objectFit="cover" src="/museum.svg" />
                    <Text
                        mt="5"
                        color="#47585B"
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="1rem"
                    >clássico</Text>
                </Flex>

                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                >
                    <Image boxSize="85px" objectFit="cover" src="/earth.svg" />
                    <Text
                        mt="5"
                        color="#47585B"
                        fontFamily="Poppins"
                        fontWeight="600"
                        fontSize="1rem"
                    >e mais...</Text>
                </Flex>
            </Flex>

            <Flex justify="center">
                <Box width="90px" borderBottom="2px solid #000" m="90px"></Box>
            </Flex>

            <Flex
                direction="column"
                justify="center"
                textAlign="center"
                fontSize="2rem"
                color="#47585B"
            >
                <Text>Vamos nessa?</Text>
                <Text>Então escolha seu continente</Text>
            </Flex>

            <Flex
                direction="column"
                justify="center"
                mt="20"
                mb="20"
            >
                <SwiperCarrousel />
            </Flex>
        </Box>
    )
}