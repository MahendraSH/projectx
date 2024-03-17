import { FC, useMemo, useState } from "react";
import md from "markdown-it";
import ReactHtmlParser from "react-html-parser";
import markdownItGithubHeadings from "markdown-it-github-headings";

interface AboutUsProps {}
const AboutUs: FC<AboutUsProps> = ({}) => {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  useMemo(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch("/data/about.md");
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    };

    fetchMarkdownContent();
  }, []);
  const data = md()
    .set({ typographer: true, breaks: false, html: true })
    .use(markdownItGithubHeadings, {
      prefixHeadingIds: false,
      enableHeadingLinkIcons: false,
      prefix: false,
    })
    .render(markdownContent);

  return (
    <div className=" w-full flex justify-center items-center min-h-screen  min-w-full">
      <div className="  sm:w-[cal(100%-20px)]  w-full  md:min-w-full md:px-16 px-4   py-8 prose   prose-headings:first-letter:capitalize  prose-headings:text-accent-foreground/75 prose-strong:text-secondary-foreground   prose-strong:font-semibold  mx-auto mt-8 *:text-foreground      ">
        {ReactHtmlParser(data)}
      </div>
    </div>
  );
};

export default AboutUs;
