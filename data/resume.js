export const heading = {
  title: 'Resume',
};

const parseResumeDate = (resumeTitle) => {
  const regex = /resume\((\d{4}-\d{2}-\d{2})\)/;
  const match = resumeTitle.match(regex);

  if (match && match[1]) {
    const [, dateString] = match;
    const parsedDate = new Date(dateString);
    if (!isNaN(parsedDate)) {
      return parsedDate;
    }
    console.error("Couldn't parse date from resume title", resumeTitle);
  }
  return null;
};

export const resumes = [
  { pdf: 'resume(2018-03-10).pdf' },
  { pdf: 'resume(2018-04-09).pdf' },
  { pdf: 'resume(2018-07-10).pdf' },
  { pdf: 'resume(2019-01-17).pdf' },
  { pdf: 'resume(2019-02-08).pdf' },
  { pdf: 'resume(2019-05-09).pdf' },
  { pdf: 'resume(2019-08-09).pdf' },
  { pdf: 'resume(2020-05-09).pdf' },
  { html: 'resume(2021-01-11).html' },
  { html: 'resume(2021-03-11).html' },
  {
    html: 'resume(2022-01-15).html',
    pdf: 'resume(2022-01-15).pdf',
  },
  {
    html: 'resume(2024-02-20).html',
    pdf: 'resume(2024-02-20).pdf',
  },
]
  .map((resume) => ({
    ...resume,
    date: parseResumeDate(resume.pdf || resume.html),
  }))
  .sort((a, b) => b.date - a.date);
