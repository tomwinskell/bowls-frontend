/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import Body from '../layouts/Body';

type Fixtures = {
  key: number;
  date: string;
  day: string;
  local: string;
  ha: string;
  misc: string;
};

export default function Fixtures() {
  const [content, setContent] = useState([]);
  // const controller = new AbortController();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:80/api/v1/getSheet?id=1Na64TAv6HYIs-PnIdu4RtJuITZ21lthhM0iXaQV2Sms&range=Sheet1`
        // {
        //   signal: controller.signal,
        // }
      );
      const data = await response.json();
      setContent(data);
    }

    fetchData();

    // return () => {
    //   controller.abort();
    // };
  }, []);

  return (
    <>
      <Body>
        <table>
          <tbody>
            {content.map((row: Fixtures) => (
              <tr key={row.key}>
                <td>{row.date}</td>
                <td>{row.day}</td>
                <td>{row.local}</td>
                <td>{row.ha}</td>
                <td>{row.misc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Body>
    </>
  );
}
