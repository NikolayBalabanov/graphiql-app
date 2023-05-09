import { useEffect, useState } from 'react';
import Loader from '../components/UI/Loader';

// const reqBody = { query: 'query {characters {    results {   name id     }  }}' };

function MyGraphQLIDE() {
  const [data, setData] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const getNewData = (queryStr: string) => {
    const reqBody = { query: queryStr };
    setLoading(true);
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((resp) => {
        console.log('QWERTY', resp);
        setData(resp);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setData(err.message);
      });
  };
  return (
    <div>
      <h2>Я тут был</h2>
      <button className="btn" onClick={() => getNewData(text)}>
        SHOW DATA
      </button>
      <div className="flex gap-3">
        <textarea
          className="w-1/2"
          name="editor"
          cols={30}
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="w-1/2">
          {loading && <Loader />}
          <pre>{JSON.stringify(data, null, '\t')}</pre>
        </div>
      </div>
    </div>
  );
}

export default MyGraphQLIDE;
