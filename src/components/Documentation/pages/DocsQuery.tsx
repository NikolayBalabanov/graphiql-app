import React, { FC } from 'react';

interface IDocsQuery {
  name: string;
}

export const DocsQuery: FC<IDocsQuery> = ({ name }) => {
  return (
    <div>
      <h2>Available queryTypes:</h2>
      <ol className="pl-2 flex flex-col gap-2">
        <li>1. {name}</li>
      </ol>
    </div>
  );
};
