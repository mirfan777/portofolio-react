import React, { useState, useEffect, useRef } from 'react';

interface Line {
  content: string;
  color: string;
}

interface FormattedLine {
  number: number;
  content: string;
  indent: number;
}

const CodeAnimation: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [formattedLines, setFormattedLines] = useState<FormattedLine[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const lines: Line[] = [
    { content: '<h1> Salam Kenal</h1>', color: 'text-slate-600 dark:text-slate-200' },
    { content: '<p> Saya adalah mahasiswa aktif IPB Vokasi jurusan Rekayasa Perangkat Lunak </p>', color: 'text-slate-600 dark:text-slate-200' },
    { content: '<p> Saya siap menerima permintaan dan pertanyaan kapan saja </p>', color: 'text-slate-600 dark:text-slate-200' },
    { content: '<p> Jangan ragu untuk menghubungi saya untuk informasi lebih lanjut atau untuk memulai kerja sama. </p>', color: 'text-slate-600 dark:text-slate-200' },
  ];

  useEffect(() => {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex].content;
      if (cursorPosition < currentLine.length) {
        const timer = setTimeout(() => {
          setText((prevText) => prevText + currentLine[cursorPosition]);
          setCursorPosition((prevPos) => prevPos + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setLineIndex((prevIndex) => prevIndex + 1);
          setCursorPosition(0);
          setText((prevText) => prevText + '\n');
        }, 800);
        return () => clearTimeout(timer);
      }
    } else {
      setIsFinished(true);
    }
  }, [cursorPosition, lineIndex]);

  const formatLines = (text: string, containerWidth: number): FormattedLine[] => {
    const formattedLines: FormattedLine[] = [];
    let lineNumber = 1;
    const charWidth = 8; // Approximate character width in pixels

    text.split('\n').forEach((line) => {
      if (line.length * charWidth <= containerWidth - 50) {
        // If the line fits, add it as is
        formattedLines.push({ number: lineNumber++, content: line, indent: 0 });
      } else {
        // If the line doesn't fit, split it
        const openingTag = line.match(/<[^/][^>]*>/);
        const closingTag = line.match(/<\/[^>]+>/);
        
        if (openingTag) {
          formattedLines.push({ number: lineNumber++, content: openingTag[0], indent: 0 });
          
          const content = line.slice(openingTag[0].length, closingTag ? -closingTag[0].length : undefined).trim();
          if (content) {
            const words = content.split(' ');
            let currentLine = '';
            words.forEach((word: string) => {
              if ((currentLine.length + word.length + 1) * charWidth > containerWidth - 70) {
                if (currentLine.trim()) {
                  formattedLines.push({ number: lineNumber++, content: currentLine.trim(), indent: 1 });
                }
                currentLine = '';
              }
              currentLine += (currentLine ? ' ' : '') + word;
            });
            if (currentLine.trim()) {
              formattedLines.push({ number: lineNumber++, content: currentLine.trim(), indent: 1 });
            }
          }
          
          if (closingTag) {
            formattedLines.push({ number: lineNumber++, content: closingTag[0], indent: 0 });
          }
        } else {
          formattedLines.push({ number: lineNumber++, content: line, indent: 0 });
        }
      }
    });

    return formattedLines;
  };

  useEffect(() => {
    const handleResize = () => {
      if (codeRef.current) {
        const containerWidth = codeRef.current.offsetWidth;
        setFormattedLines(formatLines(text, containerWidth));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [text]);

  const colorizeContent = (content: string) => {
    const tagRegex = /<\/?([a-z1-6]+)>/g;
    let lastIndex = 0;
    const parts = [];
    let match;

    while ((match = tagRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={lastIndex} className="text-slate-600 dark:text-slate-200">{content.slice(lastIndex, match.index)}</span>);
      }
      parts.push(
        <span key={match.index} className="text-gray-500">
          {'<'}<span className="text-[#e06c75]">{match[1]}</span>{'>'}
        </span>
      );
      lastIndex = tagRegex.lastIndex;
    }

    if (lastIndex < content.length) {
      parts.push(<span key={lastIndex} className="text-slate-600 dark:text-slate-200">{content.slice(lastIndex)}</span>);
    }

    return parts;
  };

  return (
    <div ref={codeRef} className="mockup-code lg:w-[500px] lg:max-w-[500px] w-full max-w-[800px] h-[350px] bg-white text-slate-800 dark:bg-gray-800 dark:text-slate-200 drop-shadow-xl overflow-hidden">
      <pre className="p-4 w-full h-full overflow-y-auto">
        <code className="block whitespace-pre-wrap break-words">
          {formattedLines.map((line, index) => (
            <span key={index} className="block">
              <span className="text-gray-500 mr-2">{line.number}</span>
              {line.indent > 0 && <span className="ml-8"></span>}
              {colorizeContent(line.content)}
            </span>
          ))}
          {isFinished && (
            <span className="inline-block w-0.5 h-5 bg-slate-200 animate-blink ml-1" style={{ animation: 'blink 1s step-end infinite' }}></span>
          )}
        </code>
      </pre>
    </div>
  );
};

export default CodeAnimation;

// Add this CSS to your global styles or component styles
`@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}`