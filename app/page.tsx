import fs from "fs";
import path from "path";
import Sidebar from "./components/Sidebar";
import MarkdownContent from "./components/MarkdownContent";

interface Section {
  id: string;
  title: string;
  content: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function parseReadme(raw: string): Section[] {
  const lines = raw.split("\n");
  const sections: Section[] = [];
  let current: Section | null = null;
  let buf: string[] = [];

  for (const line of lines) {
    const h2 = line.match(/^## (.+)/);
    if (h2) {
      if (current) {
        current.content = buf.join("\n").trim();
        sections.push(current);
      }
      const title = h2[1].trim();
      current = { id: slugify(title), title, content: "" };
      buf = [`## ${title}`];
    } else if (!/^-{3,}$/.test(line.trim())) {
      buf.push(line);
    }
  }

  if (current) {
    current.content = buf.join("\n").trim();
    sections.push(current);
  }

  return sections;
}

export default function Home() {
  const readmePath = path.join(process.cwd(), "README.md");
  const raw = fs.readFileSync(readmePath, "utf-8");
  const sections = parseReadme(raw);

  const navSections = sections.map(({ id, title }) => ({ id, title }));

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sections={navSections} />

      <main className="flex-1 overflow-y-auto px-6 py-8 md:px-12">
        <div className="max-w-4xl mx-auto prose">
          {sections.map((section) => (
            <section key={section.id} id={section.id}  className="mb-12 scroll-mt-6">
              <MarkdownContent content={section.content} />
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
