import {
  VStack,
  Heading,
  Link,
  HStack,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDimensions,
  Skeleton,
} from '@chakra-ui/react';
import { pdfjs, Document, Page } from 'react-pdf';
import PageWrapper from '../components/PageWrapper';
import { heading, resumes } from '../data/resume';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { DateTime } from 'luxon';
import { useEffect, useRef, useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [currentResume, ...archivedResumes] = resumes;

  const outerVStackRef = useRef();
  const outerVStackDimensions = useDimensions(outerVStackRef, true);
  const resumeWidth = Math.min(
    outerVStackDimensions?.borderBox?.width - 100,
    1000
  );

  const resumeRef = useRef();
  const resumeDimensions = useDimensions(resumeRef, true);
  const rawResumeHeight = resumeDimensions?.borderBox?.height || 0;
  const [resumeHeight, setResumeHeight] = useState(
    resumeDimensions?.borderBox?.height || 0
  );

  useEffect(() => {
    if (rawResumeHeight > 200) {
      setResumeHeight(rawResumeHeight);
    }
  }, [rawResumeHeight]);

  return (
    <PageWrapper>
      <VStack
        mt="2em"
        w="100%"
        ml={{ base: 0, md: '5em' }}
        ref={outerVStackRef}
        spacing="2em"
      >
        <VStack
          w="95%"
          maxW="80em"
          spacing="1em"
          alignItems={{ base: 'center', sm: 'flex-start' }}
        >
          <VStack alignItems="start">
            <Heading size="3xl">{heading.title}</Heading>
            <VStack alignItems="start" spacing="0">
              <Heading size="xl">
                Current
                {currentResume.date &&
                  ` (${DateTime.fromJSDate(currentResume.date).toLocaleString(
                    DateTime.DATE_MED
                  )})`}
              </Heading>
              <HStack>
                <Link
                  fontSize="xl"
                  href={`resources/${currentResume.html}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </Link>
                <Link
                  fontSize="xl"
                  href={`resources/${currentResume.pdf}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </Link>
              </HStack>
            </VStack>
          </VStack>
          <HStack sx={{ marginTop: '2em !important' }} justifyContent="center">
            <Box
              bg="white"
              borderRadius=".5em"
              border="1px solid #000"
              overflow="hidden"
              minWidth={resumeWidth}
              ref={resumeRef}
              onClick={() => {
                const currentWidth =
                  outerVStackDimensions?.borderBox?.width || 0;
                if (currentWidth < 715) {
                  window.open(`resources/${currentResume.html}`, '_blank');
                }
              }}
            >
              <Document
                file={`resources/${currentResume.pdf}`}
                onLoadError={console.error}
                loading={<Skeleton height="65em" />}
              >
                <Page
                  pageNumber={1}
                  height={resumeHeight}
                  renderAnnotationLayer={false}
                  width={resumeWidth}
                />
              </Document>
            </Box>
          </HStack>
          <Heading size="xl">Archive</Heading>
          <Accordion
            defaultIndex={[0]}
            allowToggle
            allowMultiple
            width={{ base: '100%', md: resumeWidth }}
            transition={{ enter: { duration: 1 } }}
          >
            {archivedResumes.map(({ pdf, html, date }, i) => {
              const resumeDate = date
                ? DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED)
                : 'N/A';
              return (
                <AccordionItem key={i} size="xl">
                  <Heading>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {resumeDate}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel>
                    <HStack>
                      {pdf && (
                        <Link
                          href={`resources/${pdf}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          PDF
                        </Link>
                      )}
                      {html && (
                        <Link
                          href={`resources/${html}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          HTML
                        </Link>
                      )}
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </VStack>
      </VStack>
    </PageWrapper>
  );
}
