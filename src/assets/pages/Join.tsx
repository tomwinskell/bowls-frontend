/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import Body from '../layouts/Body';
import DOMPurify from 'dompurify';

type Html = {
  __html: string;
};

export default function Join() {
  const [content, setContent] = useState<undefined | Html>(undefined);
  // const controller = new AbortController();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:80/api/v1/getDoc?id=1AW5r8DC-UAH9zO9BLCYM3nsuTL1LPzCEhMgoVVjwN7g`
        // {
        //   signal: controller.signal,
        // }
      );
      const data = await response.json();
      const sanitizedHtml = DOMPurify.sanitize(data.html);
      setContent({ __html: sanitizedHtml });
    }

    fetchData();

    // return () => {
    //   controller.abort();
    // };
  }, []);

  return (
    <>
      <Body>
        <div dangerouslySetInnerHTML={content}></div>
      </Body>
    </>
  );
}
