import { VStack, Heading, Link, HStack, Box } from '@chakra-ui/react';
import { pdfjs, Document, Page } from 'react-pdf';
import PageWrapper from '../components/PageWrapper';
import { heading, resumes } from '../data/resume';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [currentResume, ...archivedResumes] = resumes;
  return (
    <PageWrapper>
      <VStack mt="2em" w="100%" ml="5em">
        <VStack w="95%" maxW="80em" spacing="6em" alignItems="flex-start">
          <VStack alignItems="start">
            <Heading size="3xl">{heading.title}</Heading>
          </VStack>
          <HStack>
            <Box
              bg="white"
              borderRadius=".5em"
              border="1px solod #000"
              overflow="hidden"
            >
              <Document
                file={`resources/${currentResume.pdf}`}
                onLoadError={console.error}
              >
                <Page
                  pageNumber={1}
                  height={600}
                  renderAnnotationLayer={false}
                  scale={1.5}
                />
              </Document>
            </Box>
            <VStack>
              <Link href={`resources/${currentResume.pdf}`} target="_blank">
                PDF
              </Link>
              <Link href={`resources/${currentResume.html}`} target="_blank">
                HTML
              </Link>
            </VStack>
          </HStack>
          <VStack w="100%" align="start" spacing="5em">
            {archivedResumes.map(({ pdf, html }, i) => (
              <HStack key={i}>
                pdf &&{' '}
                <Link href={`resources/${pdf}`} target="_blank">
                  {pdf}
                </Link>
                html &&{' '}
                <Link href={`resources/${html}`} target="_blank">
                  {html}
                </Link>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </PageWrapper>
  );
}
