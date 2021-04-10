import { Flex, Image } from '@chakra-ui/react';

export function HeaderMenu() {
    return (
        <Flex
            justify="center"
            align="center"
            w="100%"
            height="100px"
        >
            <Image
                src="/images/Logo.png"
                alt="Worldtrip"
                // width="184px"
                // height="45px"
                objectFit="cover"
            />
        </Flex>
    )
}