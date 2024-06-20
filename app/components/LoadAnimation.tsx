"use client";

import { TypeAnimation } from 'react-type-animation';
import React, { createRef, useState } from "react";

function LoadAnimation() {
  const ref1 = createRef<HTMLSpanElement>();
  const ref2 = createRef<HTMLSpanElement>();
  const ref3 = createRef<HTMLSpanElement>();

  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

  const [sequenceIndex, setSequenceIndex] = useState(0);

  const handleSequenceComplete = () => {
    setSequenceIndex(sequenceIndex + 1);

    if (ref1.current) {
      ref1.current.classList.remove(CURSOR_CLASS_NAME);
    }

    if (ref2.current) {
      ref2.current.classList.remove(CURSOR_CLASS_NAME);
    }

    if (ref3.current) {
      ref3.current.classList.remove(CURSOR_CLASS_NAME);
    }
  };

  return (
    <div className="mockup-code lg:w-[500px] w-full h-[350px] bg-white text-slate-800 dark:bg-gray-800 dark:text-slate-200 drop-shadow-xl overflow-x-auto">
      <pre data-prefix="$">
        <code>
          <TypeAnimation
            ref={ref1}
            cursor={false}
            style={{
              fontSize: '12px',
            }}
            className={CURSOR_CLASS_NAME}
            sequence={[
              'lorem ipsum dolor sit amet',
              800,
              handleSequenceComplete,
            ]}
            repeat={0}
          />
        </code>
      </pre>
      {sequenceIndex > 0 && (
        <pre data-prefix=">" className="text-yellow-600">
          <code>
            <TypeAnimation
              ref={ref2}
              cursor={false}
              style={{
                fontSize: '12px',
              }}
              className={CURSOR_CLASS_NAME}
              sequence={[
                'two',
                800,
                handleSequenceComplete,
              ]}
              repeat={0}
            />
          </code>
        </pre>
      )}
      {sequenceIndex > 1 && (
        <pre data-prefix=">" className="text-success ">
          <code>
            <TypeAnimation
              ref={ref3}
              cursor={false}
              style={{
                fontSize: '12px',
              }}
              className={CURSOR_CLASS_NAME}
              sequence={[
                'Provident cupiditate voluptatem et in. Quaerat ',
                800,
              ]}
              repeat={0}
            />
          </code>
        </pre>
      )}
      <style global jsx>{`
       .custom-type-animation-cursor::after {
          content: '|';
          animation: cursor 1.1s infinite step-start;
        }
        @keyframes cursor {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default LoadAnimation;