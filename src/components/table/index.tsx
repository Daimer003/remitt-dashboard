'use client'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Skeleton
} from "@chakra-ui/react";
import Paginator from "./paginator";
import { useState } from "react";
import { paginator } from "@/utils/paginator";

interface Props {
    headers: any,
    dataBody: any,
    values: any,
    replacementFunction?: (data: any, property: string) => any, // Añadido aquí
    lineThroughCondition?: (data: any, property: string) => boolean // Añadido aquí
    onClick?: (data: any) => void
}

interface PropsRow {
    data: any,
    properties: any,
    replacementFunction?: (data: any, property: string) => any, // Añadido aquí
    lineThroughCondition?: (data: any, property: string) => boolean // Añadido aquí
    onClick?: (data: any) => void
}

/**
 * TableRow: Recibe la data, y recorre los datos dinámicamente (propiedades)
 * @param param data
 * @param param properties
 * @param param replacementFunction
 * @param param lineThroughCondition
 * @returns td dinámico
 */
const TableRow = ({ data, properties, replacementFunction, lineThroughCondition, onClick }: PropsRow) => (
    <Tr  h='50px'   bg='white' borderRadius='20px' border="1px solid #dfdfdf" marginTop={3} >
        {
            properties.map((property:any, index: number) => {
                const replacementValue = replacementFunction ? replacementFunction(data, property) : undefined;
                const value = replacementValue !== undefined ? replacementValue : data[property];
                const isLineThrough = lineThroughCondition ? lineThroughCondition(data, property) : false;

                return (
                    <Td
                        key={index}
                        fontSize={{ base: 'md', md: 'lg' }}
                        fontWeight='300'
                        textDecoration={isLineThrough ? 'line-through' : 'none'}
                        textDecorationThickness='3px'
                        textDecorationColor='red' // Aplicar line-through si la condición se cumple
                        color='black'
                      
                    >
                        <Skeleton
                            isLoaded={true}
                            startColor='#1d1d1d'
                            endColor='#2e2e2e'
                            color='#0d0d0d'
                            onClick={onClick}
                            cursor='pointer'
                        >
                            {value}
                        </Skeleton>
                    </Td>
                )
            })
        }
    </Tr>
);

/**
 * TableData: dinámica
 * @param headers: de la data
 * @param dataBody: datos
 * @param values: values de la data, ejemplo values={['type', 'date', 'wallet']}
 * @param replacementFunction: función opcional de reemplazo
 * @param lineThroughCondition: condición opcional para aplicar line-through
 * @returns td dinámico
 */
const TableData = ({ headers, dataBody, values, replacementFunction, lineThroughCondition, onClick }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);

    //* Paginador
    const res = paginator(dataBody, 6, currentPage);

    //* Página
    const handlePageChange = (page: any) => {
        setCurrentPage(page);
    };

    return (
        <Box
            display='flex'
            w='100%'
            h='100%'
            flexDir='column'
            alignItems='center'
            bg='var(--bg-table)'
            borderRadius='20px'
            padding={3}
        >
            {/* TABLE */}

            <TableContainer
                display='flex'
                flexDir='column'
                w='100%'
                gap='20px'
                marginBottom='50px'
            >
                <Table variant='' size='sm'  sx={{ borderSpacing: "0 10px" }}>
                    <Thead h='48px'>
                        <Tr h='50px' >
                            {
                                headers.map((header: any, index: number) => (
                                    <Th
                                        key={index}
                                        fontWeight='500'
                                        fontSize={{ base: 'md' }}
                                        color='black'
                                        textTransform='capitalize'
                                    >
                                        {header}
                                    </Th>
                                ))
                            }
                        </Tr>
                    </Thead>
                    <Tbody  >
                        {
                            res.visibleData.map((data: any, index: number) => (
                                <TableRow
                                    key={index}
                                    data={data}
                                    properties={values}
                                    replacementFunction={replacementFunction}  // Pasar la función de reemplazo
                                    lineThroughCondition={lineThroughCondition} // Pasar la condición de line-through
                                    onClick={() => onClick(data)}
                                />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>


            {/* PAGINATOR */}
            <Box
                display='flex'
                position='absolute'
                w='100%'
                bottom='0'
                padding='10px'
                zIndex={99}
            >
                <Box w='100%'>
                    <Paginator
                        currentPage={currentPage}
                        res={res}
                        onPageChange={handlePageChange}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default TableData;