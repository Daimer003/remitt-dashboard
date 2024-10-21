import { Box } from '@chakra-ui/react';
import { QRCodeSVG } from 'qrcode.react';


interface Props {
    value: string,
    image: string
}

const GenerateQr = ({ value, image }: Props) => {
    return (
        <Box
            borderRadius='8px'
            w='200px'
            h='200px'
            overflow='hidden'
        >
            <QRCodeSVG
                value={value}
                size={200}
                bgColor='#ffffff'
                fgColor={"#0d0d0d"}
                level={"L"}
                includeMargin={true}
                imageSettings={{
                    src: image,
                    x: undefined,
                    y: undefined,
                    height: 30,
                    width: 35,
                    excavate: true,
                }}
            />
        </Box>
    );
}

export default GenerateQr
    ;